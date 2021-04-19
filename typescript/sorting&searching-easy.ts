//Merge Sorted Array

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    var i1:number = 0;
    var i2:number = 0;
    while(i2<n){
        if(i1<m-1+i2&&nums1[i1]<nums2[i2]) i1++;
        else {
            var index = m==0?i1++:(nums1[i1]<nums2[i2]?i1+1:i1)
            nums1.splice(index,0,nums2[i2]);
            nums1.pop();
            i2++;
        }
    }
};

//First Bad Version

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        var lo = 1;
        var hi = n;
        var res = hi;
        while(lo<hi){
            var mid = lo + Math.floor((hi-lo)/2);
            //console.log(mid);
            if(isBadVersion(mid)){
                hi = mid;
                if(mid<res) res = mid;
            }else{
                lo = mid+1;
            }
        }
        return res;
    };
};