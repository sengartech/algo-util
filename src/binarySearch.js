/**
 * function to perform binary search.
 * params:
 *  arr: array of sorted elements.
 *  element: element to be searched.
 * return: index if found, and -1 if not.
 */
module.exports = binarySearch = (arr = [], element = null) => {
  if (!arr.length || element === null) return -1;

  let l = 0, r = arr.length - 1; mid = Math.floor((l + r) / 2);

  while (arr[mid] !== element && l < r) {
    if (element < arr[mid]) r = mid - 1;
    else l = mid + 1;

    mid = Math.floor((l + r) / 2);
  } // end while.

  if (arr[mid] === element) return mid;
  else return -1;

} // end of binarySearch.
