const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = nums.indexOf(10)
if (indexOfTen != -1) hasTen = true

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = nums.filter((i) => i % 3 == 0).length

// 3. use a for loop to find the average of the numbers in the array
let average = nums.reduce((acc, i) => acc + i) / nums.length

// 4. use a for loop to find the largest number in the array
let largest = nums.reduce((largest, i) => (i > largest ? i : largest), 0)

// 5. use a for loop to find the smallest number in the array
let smallest = nums.reduce(
  (smallest, i) => (i < smallest ? i : largest),
  Infinity
)

// 6. find the median of the numbers in the array
let median = nums.sort((i1, i2) => {
  if (i1 < i2) return -1
  else if (i1 > i2) return 1
  else return 0
})[nums.length / 2 - 1]

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
