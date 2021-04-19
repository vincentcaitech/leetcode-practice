//Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
*/
var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1);
            i--;
        }
    }
    return nums.length;
};
//Best time to buy and sell stock #2
/**
 * @param {number[]} prices
 * @return {number}
 */
var prices = [7, 6, 5, 4, 3, 2, 1];
var maxProfit = function (prices) {
    var profit = 0;
    var isInc = false;
    var low = prices[0];
    for (var i = 0; i < prices.length; i++) {
        if (i < prices.length - 1 && prices[i + 1] >= prices[i]) {
            if (!isInc) {
                low = prices[i];
                isInc = true;
            }
        }
        else if (i < prices.length - 1 && prices[i + 1] < prices[i]) {
            if (isInc)
                profit += prices[i] - low;
            isInc = false;
        }
        else if (isInc) {
            profit += prices[i] - low;
        }
        console.log(i, profit);
    }
    return profit;
};
//Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    for (var i = 0; i < k; i++)
        nums.splice(0, 0, nums.pop());
};
//Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort();
    for (var i = 0; i < nums.length - 1; i++)
        if (nums[i] == nums[i + 1])
            return true;
    return false;
};
//Single Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var a = 0;
    nums.forEach(function (i) {
        a ^= i;
        console.log(a);
    });
    return a;
};
//Intersection of Two Arrays II
function intersect(nums1, nums2) {
    return nums1.filter(function (n) {
        var ind = nums2.indexOf(n);
        if (ind < 0)
            return false;
        nums2.splice(ind, 1);
        return true;
    });
}
;
//Two Sum
function twoSum(nums, target) {
    var i = 0;
    var arr = nums.map(function (n) { return ({ n: n, index: i++ }); });
    arr.sort(function (a, b) { return a.n - b.n; });
    console.log(arr);
    var p1 = 0;
    var p2 = arr.length - 1;
    while (p1 < p2) {
        var sum = arr[p1].n + arr[p2].n;
        if (sum > target)
            p2--;
        else if (sum < target)
            p1++;
        else
            break;
    }
    return [arr[p1].index, arr[p2].index];
}
;
