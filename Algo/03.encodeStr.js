const str1=aaaabbcddd;
const expected1 ="a4b2c1d3";

const str2 ="";
const expected2 = "";



const str3="a";
const expected3 = "a";

// Bonus

const str4="bbcc";
const expected4 = "bbcc";


const str5="bc";
const expected5 = "bc";

function encodeStr(str){
    if (str.length<=1){
        return str
    }
    var expected=""
    counter=[]
    
    for(var i=1;i<str.length;i++){
        var counter =1
        while(str[i-1]==str[i]){
            // console.log(i, "---",str[i-1], "--",str[i],"----", counter);
            counter ++
            i++
        }
    expected+=str[i-1]+counter
    counter.push(counter)
        // console.log(i, "---",str[i-1], "--",str[i],"----", counter);
    }
    // console.log(str[0],":",counter)
    // console.log(expected);
    return expected
}
console.log(encodeStr(str1))
console.log(encodeStr(str2))
console.log(encodeStr(str3))
console.log(encodeStr(str4))
console.log(encodeStr(str5))
