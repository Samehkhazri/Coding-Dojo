// 1

console.log(hello);
// undefined
var hello = 'world';
// console.log(hello)
// hello


// 2

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
    // magnet
}

// 3

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
    // only okay


}
// print()
console.log(brendan);
// super cool

// 4

var food = 'chicken';
// print()
console.log(food);
// chicken
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    // half-chicken
    var food = 'gone';
}

// 5
var food = "chicken";
mean();

console.log(food);
// chicken

var mean = function () {
    food = "chicken";
    console.log(food);

    var food = "fish";
    console.log(food);
}
// var food = "pizza";
// print();
console.log(food);
// pizza
// error

// 6


// var genre = "disco";
// rewind();
console.log(genre);
// disco
// undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre)
    //  rock
    var genre = "r&b";
    console.log(genre);
    // r&b
}
console.log(genre);
// disco

// 7

dojo = "san jose";
console.log(dojo);
// san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    // seattle
    var dojo = "burbank";
    console.log(dojo);
    // burbank
}
console.log(dojo);
// san jose

// 8

console.log(makeDojo("Chicago", 65));
// {name:"chicago",students:65,hiring:true}
console.log(makeDojo("Berkeley", 0));
// error
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}







