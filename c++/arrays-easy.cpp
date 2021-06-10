class Solutions{
    public:
        int removeDuplicates(vector<int>& nums) {
            int l = 0;
            if(nums.size()==0) return 0;
            int prevInt = nums[0];
            for(int i = 1;i<nums.size();i++){
                if(prevInt==nums[i]){
                    nums.erase(nums.begin()+i);
                    i--;
                }
                prevInt = nums[i];
            }
            return nums.size();
        }
        
};