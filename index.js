// //Task: Javascript Control Flow and Iteration Practice

//Part 1 - Using a switch statement

const dayOfWeek = "Friday";

switch (dayOfWeek) {
  case "Monday":
    console.log("study Js");
    break;
  case "Tuesday":
    console.log("meet with friend");
    break;
  case "Wednesday":
    console.log("watch a movie");
    break;
  case "Thursay":
    console.log("cook new meal");
    break;
  case "Friday":
    console.log("go to gym");
    break;
  case "Saturday":
    console.log("read a book");
    break;
  case "Sunday":
    console.log("relax");
    break;
  default:
    console.log("invalid day of the week");
}

// Part 2 - Iterating with a for loop

const numbers = [5, 10, 15, 20, 25];
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

console.log(result);

// Part 3 - Additional for loop practice

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + " length is " + fruits[i].length);
}

// Part 4- Using if else statements

const student = {
  name: "Leyla",
  grade: 40,
};

if (student["grade"] >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
