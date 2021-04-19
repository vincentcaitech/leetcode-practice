//One class, a public method per problem

class Solutions {

    //Reverse String
    public void reverseString(char[] s) {
        char cache = ' ';
        for(int i = 0;i<s.length/2;i++){
            cache = s[i];
            s[i] = s[s.length-1-i];
            s[s.length-1-i] = cache;
        }
    }

    //First Unique Character in a String
    public int firstUniqChar(String s) {
        for(int i =0;i<s.length();i++){
            boolean isDuplicate = false;
            for(int j = i+1;j<s.length();j++){
                if(s.substring(i,i+1).equals(s.substring(j,j+1))) isDuplicate = true;
            }
            if(!isDuplicate) return i;
        }
        return -1;
    }
}