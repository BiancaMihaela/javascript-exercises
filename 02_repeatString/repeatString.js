const repeatString = function(string, number) {


    if(number>0){
        aux=string; 
        for (let x=1; x<number; x++){
            string=string.concat(aux); 
        }
        return string; 
    }
    else if(number==0)
    {
        return ""; 
    }
    else
    {
        return "ERROR"; 
    }

};

// Do not edit below this line
module.exports = repeatString;
