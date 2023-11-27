/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid

Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
*/
const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = "a)b((c))";
const expected5 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.




function parensValid(str = "") {
    var test = ""
    for (i = 0; i < str.length; i++) {
        if (str[i] == "(" || str[i] == ")") {
            test += str[i]
        }

    }
    console.log(test);
    if (test.length % 2 != 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}
function parensValidcount(str""){
    var count =0
    for (var i=0;str.length;i++){
        if (str[i]=="("){
            count++
        }else if (str[i]==")"&& count>0){
            count--
        }
    }
}   return count ===0
function parensValidcount(str=""){
    var count =0
    var i =0
    while (count>=0 && i<str.length){
        if (str[i]=="("){
            count++
        }else if (str[i]==")"){
            count--
        }
        i++
    }
}   return count === 0

// parensValid(str1)
// parensValid(str2)
// parensValid(str2)
// parensValid(str3)
// parensValid(str4)
// parensValid(str5)

console.log(parensValidCount(str1));
console.log(parensValidCount(str2));
console.log(parensValidCount(str3));
console.log(parensValidCount(str4));
console.log(parensValidCount(str5));
console.log(parensValidCount(str6));


