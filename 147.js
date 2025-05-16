//Merge two arrays

let arr1 = [1, 2, 3, 6, 18, 19];
let arr2 = [7, 8, 9, 12, 15];
//For Unsorted array

// 1. Using spread operator

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

//2. Using concat method

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

//3. Using array.push()

//This method can also work for sorted arrays only if both arrays are already sorted and continious
// for (i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1);

//For Sorted arrays

function mergeSorted(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  //For remaining items in arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  //For remaining items in arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  return merged;
}

console.log(mergeSorted(arr1, arr2));
