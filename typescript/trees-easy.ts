
class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
    }
}


//Maximum Depth of a Binary Tree

function maxDepth(root: TreeNode | null): number {
    return getDepth(root,0)
};

function getDepth(root: TreeNode | null,depth:number ):number{
    if(root==null) return depth;
    return Math.max(getDepth(root.left,depth+1),getDepth(root.right,depth+1));
}

//Validate Binary Search Tree

function isValidBST(root: TreeNode | null): boolean {
    return isValid(root,null,null);
};

function isValid(root: TreeNode | null, min: number | null, max: number|null):boolean{
    if(root ==null) return true;
    return (min==null||root.val>min)&&(max==null||root.val<max)&&isValid(root.left,min,root.val)&&isValid(root.right,root.val,max);
}


//Symmetric Tree

function isSymmetric(root: TreeNode | null): boolean {
    return isReverse(root.left,root.right);
};

function isReverse(treeLeft: TreeNode |null, treeRight: TreeNode|null):boolean{
    if(treeLeft==null&&treeRight==null) return true;
    if((treeLeft==null&&treeRight!==null)||(treeLeft!==null&&treeRight==null))return false;
    return (treeLeft.val==treeRight.val)&&isReverse(treeLeft.right,treeRight.left)&&isReverse(treeLeft.left,treeRight.right)
}

//Binary Tree Level Order Traversal

function levelOrder(root: TreeNode | null): number[][] {
    if(root==null) return [];
    var thisLevel = []; //start at "0th" level
    var nextLevel = [root];
    var ans = [];
    while(thisLevel.length>0||nextLevel.length>0){
        //if need to switch to the next level, do the switch
        if(thisLevel.length==0){
            thisLevel = [...nextLevel];
            var arr = thisLevel.map(n=>n.val);
            ans.push(arr);
            nextLevel = [];
        }
        while(thisLevel.length>0){
            var node = thisLevel[0];
            
            if(node.left!==null) nextLevel.push(node.left);
            if(node.right!==null) nextLevel.push(node.right);
            thisLevel.shift();
        }
    }
    return ans;
};

//Convert Sorted Array to Binary Search Tree

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return setBinaryTree(nums);
};

function setBinaryTree(nums: number[]): TreeNode | null {
if(nums.length==0) return null
var index:number = Math.floor(nums.length/2);
return new TreeNode(nums[index],setBinaryTree(nums.slice(0,index)),setBinaryTree(nums.slice(index+1)));
}