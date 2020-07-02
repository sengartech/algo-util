/**
 * function to perform linear search.
 * params:
 *  arr: array of sorted elements.
 *  element: element to be searched.
 * return: index if found, and -1 if not.
 */
module.exports = linearSearch = (arr = [], element = null) => {
  if (!arr.length || element === null) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      return i;
    }
  }

  return -1;
} // end of linearSearch.
