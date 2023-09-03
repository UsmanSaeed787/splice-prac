// // Assignment for the week is:

// //  1- Create a function that takes an array, an index, and a value as parameters. Inside the function,
// // use the splice method to insert the value at the specified index in the array.Return the modified array.

function array1(array: any[], index: number, value: number) {
    array.splice(index, 0, value);
    return array;
}
var myArray: number[] = [1, 2, 3, 4, 5];
console.log(array1(myArray, 1, 6));

// //----------------------------------------------------------

// //  2- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method.
// //Print the cart's contents after each operation

var cart: any[] = [{ name: "7up", Quantity: 1, Price: 170 }];

// Add Items
function addItem(item1: string, quantity1: number, price1: number) {
    cart.splice(0, 0, { name: item1, Quantity: quantity1, Price: price1 });
    console.log(cart);
}

addItem("Eggs", 6, 120);
addItem("Bread", 1, 100);
addItem("Toothbrush", 1, 150);

// Remove Items
function removeItem(index1: number, itemsToBeRemoved: number) {
    cart.splice(index1, itemsToBeRemoved);
    console.log(cart);
}

removeItem(0, 1);

// // Update Items

function updateItem(index2: number, quantity2: number) {
    cart[index2].Quantity = quantity2;
    console.log(cart);
}

updateItem(2, 3);

// //----------------------------------------------------------

// 3 - Write a program that uses a while loop to print the first 25 integers.

var numArray2: number[] = [];
var j = 1;
while (j <= 25) {
    numArray2.push(j);
    j++;
}
console.log(numArray2);

// //----------------------------------------------------------

// // 4 - Write a program that uses a while loop to print the first 10 even numbers.

var numArray1: number[] = [];
var evenNumber: number = 0;
var count: number = 0;
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

function factorialNumber(positiveInteger: number) {
    var fact: number = 1;
    var i: number = 1;
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
var numArray: number[] = [1, 3, -5, 60, -50];
while (i < numArray.length) {
    if (numArray[i] < 0) {
        numArray.splice(i, 1);
    }
    i++;
}
console.log(numArray);

// 7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and
// return the sum of all the numbers in the array.

var sumOfNumbers: number = 0;
function arrayOfNum(array1: any) {
    var i = 0;
    while (i < array1.length) {
        sumOfNumbers += array1[i];
        i++;
    }
    return sumOfNumbers;
}

var numArray2: number[] = [2, 3, 4, 23, 23, 54, 6];
console.log(arrayOfNum(numArray2));

// 8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit
// using the formula F = (C * 9 / 5) + 32 and store the converted temperatures in an array.Use a while loop to perform the conversion for each temperature.

function tempConverter(tempArray: number[]) {
    var convertedArray: number[] = [];
    var i = 0;
    while (i < tempArray.length) {
        var celsiusToFahrenheit: number = (tempArray[i] * 9) / 5 + 32;
        convertedArray.push(celsiusToFahrenheit);
        i++;
    }
    return convertedArray;
}
var array3 = tempConverter([1, 10, 38]);
console.log(array3);