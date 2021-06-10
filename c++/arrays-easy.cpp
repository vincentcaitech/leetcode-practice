class Solutions{
    public:
        //Remove Duplicates
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

        //Plus One
        vector<int> plusOne(vector<int>& digits) {
            int i = digits.size()-1;
            do{
                digits[i] = digits[i]+1;
                if(i<digits.size()-1) digits[i+1] = 0;
                i--;
            }while(digits[i+1]>=10&&i>=0);
            if(digits[0]==10){
                digits[0] = 0;
                digits.insert(digits.begin(),1);
            }
            return digits;
        }

        //Move Zeroes
        void moveZeroes(vector<int>& nums) {
            int i =0;
            int n = 0;
            while(i<nums.size()-n){
                if(nums[i]==0){
                    int temp = nums[i];
                    nums.erase(nums.begin()+i);
                    nums.push_back(temp);
                    n++;
                    // for(int i:nums) cout << nums[i];
                    // cout << endl;
                }else{
                    i++;
                }
            }
        }

};