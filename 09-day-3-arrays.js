/*
 * Complete the getSecondLargest function in the editor below.
 * It has one parameter: an array, 'nums', of 'n' numbers.
 * The function must find and return the second largest number in 'nums'.
 */
function getSecondLargest(nums) {
  let first = nums[0];
  let second = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }
    if (nums[i] < first && nums[i] > second) { 
      second = nums[i];
    }
  }
  return second;
};