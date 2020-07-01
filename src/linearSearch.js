/**
 * function to perform linear searching.
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
