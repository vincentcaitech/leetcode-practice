//First Unique Character in a String

function firstUniqChar(s: string): number {
    var hashmap: object = {};
     for(var i:number = 0;i<s.length;i++){
         var sub:string = s.substring(i,i+1);
         if(hashmap[sub]){
             hashmap[sub].push(i);
         }else{
             hashmap[sub] = [i];
         } 
     }
     var minIndex:number = s.length;
    var isValid:boolean = false;
     Object.keys(hashmap).forEach(key=>{
         if(hashmap[key].length==1&&hashmap[key][0]<minIndex){
             isValid = true;
             minIndex = hashmap[key][0];
         }
     })
     return isValid?minIndex:-1;
     
};

//String to Integer (Atoi)

function myAtoi(s: string): number {
    var num:string = "";
    var sign:boolean = true; //true of positive
    while(s.substring(0,1)==" "){
        s = s.substring(1);
    }
    console.log(isNaN(Number("hello")));
    if(s.substring(0,1)=="+") s = s.substring(1);
    else if(s.substring(0,1)=="-"){
        sign = false;
        s = s.substring(1);
    }
    while(!isNaN(Number(s.substring(0,1)))&&s.length>0&&s.substring(0,1)!==" "){
        num += s.substring(0,1);
        s = s.substring(1);
    }
    if(num.length==0) return 0;
    else{
        var finNum:number = parseInt(num);
        if(!sign){ 
            var lowLim:number = -1*Math.pow(2,31)
            finNum *= -1;
            if(finNum<lowLim) return lowLim;
            else return finNum;
        }else{
            var hiLim:number = Math.pow(2,31)-1;
            if(finNum>hiLim) return hiLim;
            else return finNum;
        }
        
    }
};

//Implement strStr()

function strStr(haystack: string, needle: string): number {
    if(needle.length==0) return 0;
    for(var i:number=0;i<haystack.length-needle.length+1;i++){
        console.log(haystack.substring(i,i+needle.length),needle);
        if(haystack.substring(i,i+needle.length)==needle){
            console.log("true")
            return i;
        }else{
            console.log("false");
        }
    }
    return -1;
};
