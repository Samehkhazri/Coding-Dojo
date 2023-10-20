//Find average
//Given an array with multiple values, write a function that returns the average of the values in the array. 
//(e.g. for [1,3,5,7,20] average is 7.2)

function findAvg (arr){
    var sum=0;
    var avg=0;
    for(var i =0;i<=arr.length-1;i++){
        sum=sum+arr[i];
    }
avg=sum /arr.length;
return avg;
}
console.log(findAvg([1,3,5,7,20]));

//Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). 
//Hint: Use 'push' method.
