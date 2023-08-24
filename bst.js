/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  customizeArr(arr) {
    const uniqueArr = [...new Set(arr)];
    const sortedArr = uniqueArr.sort((a, b) => a - b);
    return sortedArr;
  }

  buildTree(data) {
    const sortedArr = this.customizeArr(data);

    if (sortedArr.length === 0) {
      return null;
    }

    const midIndex = Math.floor(sortedArr.length / 2);
    const rootNode = new Node(sortedArr[midIndex]);

    rootNode.left = this.buildTree(sortedArr.slice(0, midIndex));
    rootNode.right = this.buildTree(sortedArr.slice(midIndex + 1));

    return rootNode;
  }

  insert(value, root = this.root) {
    if (root === null) return new Node(value);
    root.data < value
      ? (root.right = this.insert(value, root.right))
      : (root.left = this.insert(value, root.left));

    return root;
  }

  delete(key) {
    this.root = this.deleteRec(this.root, key);
  }

  deleteRec(root, key) {
    if (root === null) {
      return root;
    }

    if (key < root.data) {
      root.left = this.deleteRec(root.left, key);
    } else if (key > root.data) {
      root.right = this.deleteRec(root.right, key);
    } else {
      if (root.left === null) {
        return root.right;
      } if (root.right === null) {
        return root.left;
      }
      root.data = this.getMinValue(root.right);

      root.right = this.deleteRec(root.right, root.data);
    }

    return root;
  }

  visualizeArray() {
    const values = [];
    this.inorderTraversal(this.root, values);
    console.log(values);
  }

  inorderTraversal(node, values = []) {
    if (node === null) {
      return;
    }
    this.inorderTraversal(node.left, values);
    values.push(node.data);
    this.inorderTraversal(node.right, values);
  }

  getMinValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  find(value) {
    const finalRoot = this.findRecur(this.root, value);
    return finalRoot;
  }

  findRecur(root, value) {
    if (value < root.data) {
      return this.findRecur(root.left, value);
    }

    if (value > root.data) {
      return this.findRecur(root.right, value);
    }

    return root;
  }

  showRoot() {
    return this.root;
  }

  levelOrder(callback = null) {
    if (this.root === null) {
      return [];
    }

    const queue = [this.root];
    const results = [];

    while (queue.length > 0) {
      const node = queue.shift();

      if (callback) {
        callback(node);
      } else {
        results.push(node.data);
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return results;
  }

  inorder(cb = null) {
    if (!this.root) {
      return [];
    }

    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (cb) {
        cb(node.data);
      } else {
        result.push(node.data);
      }

      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  postorder(cb = null) {
    if (!this.root) {
      return [];
    }

    const result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      if (cb) {
        cb(node.data);
      } else {
        result.push(node.data);
      }
    };

    traverse(this.root);

    return result;
  }

  preorder(cb = null) {
    if (!this.root) {
      return [];
    }

    const result = [];

    const traverse = (node) => {
      if (cb) {
        cb(node.data);
      } else {
        result.push(node.data);
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);

    return result;
  }

  height(node = this.root) {
    if (!node) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(givenNode, root = this.root, level = 0) {
    if (!givenNode) return null;
    if (root === null) return 0;
    if (givenNode === root.data) {
      return level;
    }
    const count = this.depth(givenNode, root.left, level + 1);
    if (count !== 0) return count;
    return this.depth(givenNode, root.right, level + 1);
  }

  isBalanced(node = this.root) {
    if (!node) {
      return -1;
    }

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if ((Math.abs(leftHeight - rightHeight) > 1) && (this.isBalanced(node.left) && this.isBalanced(node.right))) {
      return false;
    }

    return true;
  }

  rebalance() {
    if (this.root === null) return;
    const sorted = [...new Set(this.inorder().sort((a, b) => a - b))];
    this.root = this.buildTree(sorted);
  }
}

module.exports = Tree;
