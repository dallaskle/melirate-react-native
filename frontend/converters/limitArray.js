export function limitArray(array, limit) {
    if (array.length <= limit) {
      return array; // No need to limit if array length is already less than or equal to the limit
    } else {
      return array.slice(0, limit); // Use slice to create a new array with the limited number of items
    }
  }