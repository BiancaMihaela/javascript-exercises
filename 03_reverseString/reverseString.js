const reverseString = function(string) {
    let myReversedArray =""; 
    const myArray= string.split(""); 
    for(let i=1; i<=string.length; i++)
    {
    let wantedPosition= string.length-i; 
    myReversedArray = myReversedArray.concat(myArray[wantedPosition]);
  
    }
    return myReversedArray;
};

// Do not edit below this line
module.exports = reverseString;
