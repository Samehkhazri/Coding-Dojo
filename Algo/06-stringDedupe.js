/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

/**
 * De-dupes the given string.
 */

// function stringDedupe(str) {
//     var expected =""
//     for (var i=0 ; i<str.length;i++){
//         if (str[i]==str[i+1]){
//             expected +=[i]
//             i++
//         } else{
//             expected+= str[i]
//         }
//     }
//     return expected
// }


function stringDedupe2(str) {
    var expected =""
    for (var i=0 ; i<str.length;i++){
        if (expected.indexOf(str[i] ==-1)){
            expected +=[i]
            i++
        } else{
            expected+= str[i]
        }
    }
    return expected
}

// console.log("Input :",str1,"expected :",expected1,"Result:",stringDedupe(str1));
// console.log("Input :",str2,"expected :",expected2,"Result:",stringDedupe(str2));
// console.log("Input :",str3,"expected :",expected3,"Result:",stringDedupe(str3));
// console.log("Input :",str4,"expected :",expected4,"Result:",stringDedupe(str4));
// 2
console.log("Input :",str1,"expected :",expected1,"Result:",stringDedupe(str1));
console.log("Input :",str2,"expected :",expected2,"Result:",stringDedupe(str2));
console.log("Input :",str3,"expected :",expected3,"Result:",stringDedupe(str3));
console.log("Input :",str4,"expected :",expected4,"Result:",stringDedupe(str4));