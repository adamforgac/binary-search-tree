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

