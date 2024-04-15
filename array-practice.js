const findMinimum = arr => {

  // Your code here
  // We need to iterate through the 'n' which would make the time complexity linear.
  // We need to save the index and min value and return it. This would be constant for space complexity.
  // Time complexity: O(n)
  // Space complexity: O(1)

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const potentialMin = arr[i];

    if (potentialMin < min) min = potentialMin;
  }

  return min
};

const runningSum = arr => {

  // Your code here
  // We need to iterate though 'n' once. All other algorithmic computations are constants
  // We need to make an empty array to push in the result. That would make it linear. All other inputs
  // are constant.

  if (!arr.length) return [];

  const sumsArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    sumsArr.push(sumsArr[sumsArr.length - 1] + num); // constant time and space
  }

  return sumsArr;
};

const evenNumOfChars = arr => {

  // Your code here
  // Time complexity: iterating through 'n' makes this linear. Doing the test for checking if the length
  // is even is also constant.
  // Space complexity: we are recording count, index. They are constant

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element.length % 2 === 0) count++;
  }

  return count;
};

const smallerThanCurr = arr => {

  // Your code here
  // Time complexity: We need to iterate through the array with each element. So the makes the linear n^2 so quadratic. All other algorithmtic is constant
  // Space complexity:
    // constant: 'i', 'k', 'any tests', 'count', 'Array.push'
    // linear: the arr that we create to push the result in.

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    let count = 0;

    for (let k = 0; k < arr.length; k++) {
      let current = arr[k];

      if (current < num) count++;
    }

    result.push(count);
  }

  return result;
};

const twoSum = (arr, target) => {

  // Your code here
  // Time complexity:
    // We need to create 2 two-loops nested wich makes this quadratic. All other arithmitic is constant. However, we are explictyl return a boolean so worst case scenario is n^2.
  // Space complexity:
    // constant: 'i', 'k', 'Array.push', 'any test'

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    for (let k = 0; k < arr[i]; k++) {
      const current = arr[k];

      if ((current + num) === target) return true;
    }

  }

  return false;
};

const secondLargest = arr => {

  // Your code here
  if (arr.length < 2) return undefined;

  const highest = Math.max(...arr);

  let current = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num < highest) {
      if (current < num) current = num;
    }

  }

  // Time complexity: O(n)
  // Space complexity: O(n)

  return (current) ? current : highest; // This will be a test
}

const shuffle = (arr) => {

  // Your code here
  // Logic:
    // Note: there are many ways to do this
    // We are going to make a copy of arr to mutate it or decompose it.
    // We are going to reference arr[Math.floor(Math.random() * arr.length)] and save it.
    // From here we can push the result into the empty array
    // We also need to remove the result from the copied array.
      // We will use splice and use random num as reference
      // We will loop this until the copied array is a length of 0

  const copiedArr = arr.slice(0); // Time complexity => linear : Space complexity => linear
  const result = []; // Time complexity => O(1) : Space complexity => linear

  while (copiedArr.length) { // Time complexity => linear : Space complexity => O(1)
    let index = Math.floor(Math.random() * copiedArr.length); // Time complexity => O(1) : Space complexity => O(1)
    result.push(copiedArr[index]); // Time complexity => O(1) : Space complexity => O(1)
    copiedArr.splice(index, 1); // Time complexity => linear : Space complexity => linear
  }

  // Overall: Time complexity => O(n^2), Space complexity => O(n^2)
  return result;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
