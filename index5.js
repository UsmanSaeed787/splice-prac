"use strict";
// // Assignment for the week is:
// //  1- Create a function that takes an array, an index, and a value as parameters. Inside the function,
// // use the splice method to insert the value at the specified index in the array.Return the modified array.
function array1(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var myArray = [1, 2, 3, 4, 5];
console.log(array1(myArray, 1, 6));
// //----------------------------------------------------------
// //  2- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method.
// //Print the cart's contents after each operation
var cart = [{ name: "7up", Quantity: 1, Price: 170 }];
// Add Items
function addItem(item1, quantity1, price1) {
    cart.splice(0, 0, { name: item1, Quantity: quantity1, Price: price1 });
    console.log(cart);
}
addItem("Eggs", 6, 120);
addItem("Bread", 1, 100);
addItem("Toothbrush", 1, 150);
// Remove Items
function removeItem(index1, itemsToBeRemoved) {
    cart.splice(index1, itemsToBeRemoved);
    console.log(cart);
}
removeItem(0, 1);
// // Update Items
function updateItem(index2, quantity2) {
    cart[index2].Quantity = quantity2;
    console.log(cart);
}
updateItem(2, 3);
// //----------------------------------------------------------
// 3 - Write a program that uses a while loop to print the first 25 integers.
var numArray2 = [];
var j = 1;
while (j <= 25) {
    numArray2.push(j);
    j++;
}
console.log(numArray2);
// //----------------------------------------------------------
// // 4 - Write a program that uses a while loop to print the first 10 even numbers.
var numArray1 = [];
var evenNumber = 0;
var count = 0;
while (count < 10) {
    if (evenNumber % 2 == 0) {
        numArray1.push(evenNumber);
        count++;
    }
    evenNumber++;
}
console.log(numArray1);
// //----------------------------------------------------------
// // 5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorialNumber(positiveInteger) {
    var fact = 1;
    var i = 1;
    while (i <= positiveInteger) {
        fact *= i;
        i++;
    }
    console.log(fact);
}
factorialNumber(5);
//----------------------------------------------------------
// 6 - Write a program having an array of numbers if the number is negative it should remove the negative number
// from the array.
let i = 0;
var numArray = [1, 3, -5, 60, -50];
while (i < numArray.length) {
    if (numArray[i] < 0) {
        numArray.splice(i, 1);
    }
    i++;
}
console.log(numArray);
// 7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and
// return the sum of all the numbers in the array.
var sumOfNumbers = 0;
function arrayOfNum(array1) {
    var i = 0;
    while (i < array1.length) {
        sumOfNumbers += array1[i];
        i++;
    }
    return sumOfNumbers;
}
var numArray2 = [2, 3, 4, 23, 23, 54, 6];
console.log(arrayOfNum(numArray2));
// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit
// using the formula F = (C * 9 / 5) + 32 and store the converted temperatures in an array.Use a while loop to perform the conversion for each temperature.
function tempConverter(tempArray) {
    var convertedArray = [];
    var i = 0;
    while (i < tempArray.length) {
        var celsiusToFahrenheit = (tempArray[i] * 9) / 5 + 32;
        convertedArray.push(celsiusToFahrenheit);
        i++;
    }
    return convertedArray;
}
var array3 = tempConverter([1, 10, 38]);
console.log(array3);
