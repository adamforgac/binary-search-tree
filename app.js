/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-console */
const TreeGenerator = require('./bst');

function generateRandomArray() {
  const maxLength = 50;
  const maxValue = 100;

  const arrayLength = Math.floor(Math.random() * maxLength) + 1; // Random length between 1 and maxLength
  const randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * maxValue); // Random number between 0 and maxValue - 1
    randomArray.push(randomNumber);
  }

  return randomArray;
}

const tree = new TreeGenerator(generateRandomArray());
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
console.log(tree.insert(105));
console.log(tree.insert(131));
console.log(tree.insert(202));
console.log(tree.insert(121));
console.log(tree.insert(183));
console.log(tree.insert(166));
console.log(tree.isBalanced());
console.log(tree.rebalance()); // throws undefined in the console but works
console.log(tree.isBalanced());
console.log(tree.levelOrder());
console.log(tree.preorder());
console.log(tree.postorder());
console.log(tree.inorder());
