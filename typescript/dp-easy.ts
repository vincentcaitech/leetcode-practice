//Climbing Stairs (fix the global var)

var arr:(number|null)[] = []

function climbStairs(n: number): number {
    return getSteps(n,1);
};

function getSteps(r: number,c: number){//remaining and count
    if(r<2) return c;
    if(!arr[r-1]) arr[r-1] = getSteps(r-1,c);
    if(!arr[r-2]) arr[r-2] = getSteps(r-2,c);
    return arr[r-1]+arr[r-2];
}

//Best Time to Buy and Sell Stock

function maxProfit(prices: number[]): number {
    if(prices.length<=1) return 0;
    var min = prices[0];
    var max = prices[0];
    var minIndex = 0;
    var maxIndex = 0;
    var isDec:boolean = true;
    //first loop to find max and min;
    for(let i = 1;i<prices.length;i++){
        if(prices[i]>max){
            max = prices[i];
            maxIndex = i;
        }
        if(prices[i]<min){
            min = prices[i];
            minIndex = i;
        }
        if(prices[i]>prices[i-1]) isDec = false;
    }
    if(isDec) return 0;
    if(minIndex<=maxIndex) return max-min;
    else{
        return Math.max(maxProfit(prices.slice(0,maxIndex+1)),maxProfit(prices.slice(maxIndex+1,minIndex)),maxProfit(prices.slice(minIndex)));
    }
};

//House Robber

function rob(nums: number[]): number {
    var ind:number =0;
    while(nums[ind]==0) ind++;
    nums = nums.slice(ind);
    if(nums.length==1)return nums[0];
    if(nums.length==0) return 0;
    var i:number = Math.max(robMax(nums,nums[0],2,{}),robMax(nums,nums[1],3,{}));
    return i;
};

function robMax(nums: number[], count:number, index:number, hashTable:object){
    if(hashTable[index]) return hashTable[index] + count;
    if(index>=nums.length) return count;
    if(index>=nums.length-1) return count + nums[nums.length-1];
    var a:number = robMax(nums,nums[index],index+2,hashTable);
    var b:number = robMax(nums,nums[index+1],index+3,hashTable);
    hashTable[index] = Math.max(a,b);
    return hashTable[index]+count;
}