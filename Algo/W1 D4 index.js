var Array1 =[5,36,47,102];

var aar1 = [11,22,33,44,55];

var aar2 = ["a","b","c","d","e"];


function reverse(genericArray){
for(var i=0;i<genericArray.length/2;i++){
    //create a temp variable
    var temp = genericArray[i]//11
    genericArray[i]=genericArray[genericArray.length-1-i]
    genericArray[genericArray.length-1-i] = temp
}
 return genericArray;
}
console.log(arr2);