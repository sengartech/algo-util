/**
 * function to perform selection sorting.
 * time complexity: O(n^2).
 * params:
 *  arr: array of elements.
 * return: sorted array.
 */
module.exports = selectionSort = (arr = []) => {

  for (let i = 0; i < arr.length; i++) {

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }

    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

  } // end outer for.

  return arr;
} // end of selectionSort.
