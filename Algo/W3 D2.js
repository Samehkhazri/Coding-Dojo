// Arr Flat


var arr2d= [
 [2 ,5 ,8],
 [3 ,6 ,4],
 [5 ,7 ,7]
]
 function flatten(arr2d){
    var flat =[];
    for (var i=0;i<arr2d.length; i++ ){
        for (var j=0; j<arr2d[i].length; j++){
            flat.push(arr2d[i][j]);
        }

    }
    return flat;
}
var a=flatten([
    [2 ,5 ,8],
    [3 ,6 ,4],
    [5 ,7 ,7]
   ])
   console.log(a);
// TwoSum
   //example1 
//    Input
// nums=[2, 7, 11, 15], target = 9
function sums(arr,target){
    var newArr=[];
    var sum=0;
    for(var i =0;i< arr.length-1;i++){
        sum=arr[i]+arr[i+1];
        if(sum===target){
            newArr.push(i,i+1);
            break;
        }
    }
    return newArr;
}
console.log(sums([5,3,4],8));

//output:
// [0,1]