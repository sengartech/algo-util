# Algo-Util

  Library having data structures and algorithms as utility functions for node.js.
    
  [Click here](https://www.npmjs.com/package/algo-util) for the link.

  Note: This module is still under development and more util functions will be added.

## Philosophy

  Algo-util philosophy is to provide complex data structures and algorithms as utility to developers.

  This will save their precious time, and let them focus on core development.

  This will also help new developers who just entered the industry.

  cheers... ;)

## Installation

  This is a [Node.js](https://nodejs.org) module available through the [npm registry](https://www.npmjs.com/package/algo-util).

  Before installing, [download and install Node.js](https://nodejs.org/en/download/).
  Node.js 8.x or higher is required.

  Installation can be done using the
  [`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

  ```bash
  $ npm install algo-util --save
  ```

## How To Use

  ```js
  const algoUtil = require('algo-util');

  let arr = [8, 4, 9, 5, 2];
  let sortedList = algoUtil.bubbleSort(arr);

  console.log(sortedList);
  ```

## Examples

  ```js
  const algoUtil = require('algo-util');

  let arr = [8, 4, 9, 5, 2];
  ```
  Performing Linear Searching.
  ```js
  let index1 = algoUtil.linearSearch(arr, 9);
  console.log(index1); // 2 (-1 if not found)
  ```
  Performing Binary Searching.
  ```js
  let index = algoUtil.binarySearch(arr, 5);
  console.log(index); // 3 (-1 if not found)
  ```
  Performing Bubble Sorting.
  ```js
  let sortedList = algoUtil.bubbleSort(arr, 9);
  console.log(sortedList); // [2, 4, 5, 8, 9]
  ```
  Performing Selection Sorting.
  ```js
  let sortedList = algoUtil.selectionSort(arr, 9);
  console.log(sortedList); // [2, 4, 5, 8, 9]
  ```

## Features

  * Implemented in native javascript.
  * No other library used.
  * Major data structures included.
  * Searching algorithms.
  * Sorting algorithms.
  * More yet to come... :)

## Authors

The original author and current maintainer of Algo-util is [Rishabh Singh Sengar](https://github.com/sengartech).

<!-- [List of all contributors](https://github.com/sengartech/algo-util/graphs/contributors). -->

## License

[MIT](license)

[npm-url]: https://www.npmjs.com/package/algo-util
