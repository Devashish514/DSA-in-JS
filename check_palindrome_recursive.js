// check whether string is palindrome or not...

const checkPalindrome= (str)=>{
    return isPalindromeHelper(str,0,str.length-1);
}
const isPalindromeHelper=(str,firstPos,lastPos)=>{
    if(firstPos>=lastPos){
        return true;
    }
    if(str.charAt(firstPos)!=str.charAt(lastPos)){
        return false;
    }else{
        return isPalindromeHelper(str,firstPos+1,lastPos-1);
    }
}
console.log(checkPalindrome(String(1221)));