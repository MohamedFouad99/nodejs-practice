
function findKthPositive(arr, k) {
  let missingCount = 0;
  let currentNumber = 1;

  while (missingCount < k) {
    if (!arr.includes(currentNumber)) {
      missingCount++;
    }

    if (missingCount === k) {
      return currentNumber;
    }

    currentNumber++;
  }
}

// Example 1
console.log(findKthPositive([2, 3, 4, 7, 11], 5));

// Example 2
console.log(findKthPositive([1, 2, 3, 4], 2));

