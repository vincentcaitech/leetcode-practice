//Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    for(var i = 0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]) {
            nums.splice(i+1,1);
            i--;
        }
    }
    return nums.length
};

//Best time to buy and sell stock #2 (Make sure to make var name)

var maxProfit2 = function(prices) {
     var profit = 0;
     var isInc = false;
     var low = prices[0];
     for(var i =0;i<prices.length;i++){
         if(i<prices.length-1&&prices[i+1]>=prices[i]){
             if(!isInc) {
                 low = prices[i];
                 isInc = true;
             }
         }else if(i<prices.length-1&&prices[i+1]<prices[i]){
             if(isInc) profit += prices[i] - low;
             isInc = false;
         }else if(isInc) {
              profit += prices[i] - low;
         }
         console.log(i,profit)
     }
     return profit
 };

//Rotate Array

var rotate = function(nums, k) {
    for(var i =0;i<k;i++) nums.splice(0,0,nums.pop());
};

//Contains Duplicate

var containsDuplicate = function(nums) {
    nums.sort();
    for(var i = 0;i<nums.length-1;i++) if(nums[i]==nums[i+1]) return true;
    return false;
};

//Single Number

var singleNumber = function(nums) {
    var a = 0;
    nums.forEach(i=>{
        a ^= i;
        console.log(a);
    })
    return a;
};


//Intersection of Two Arrays II

function intersect(nums1: number[], nums2: number[]): number[] {
    return nums1.filter(n=>{
        var ind = nums2.indexOf(n);
        if(ind<0) return false;
        nums2.splice(ind,1);
        return true;
    });
};


//Two Sum

function twoSum(nums: number[], target: number): number[] {
    var i = 0;
    var arr:{n: number; index: number}[] = nums.map(n=>({n,index:i++}));
    arr.sort((a,b)=>a.n-b.n);
    console.log(arr);
    var p1 = 0;
    var p2 = arr.length-1;
    while(p1<p2){
        var sum = arr[p1].n+arr[p2].n;
        if(sum>target) p2--;
        else if(sum<target) p1++;
        else break;
    }
    return [arr[p1].index,arr[p2].index];
}; 
