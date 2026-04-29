// Task 1: Create the arrays
let drinks = ["Latte", "Tea", "Espresso"];
let pastry = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the lengths
console.log("Number of drinks:", drinks.length);
console.log("Number of pastries:", pastry.length);

// Task 3: Access using hardcoded bracket notation
console.log("First drink and last pastry:", drinks[0], pastry[2]);
console.log("Second drink and second pastry:", drinks[1], pastry[1]);
console.log("Third drink and first pastry:", drinks[2], pastry[0]);

// Task 4: Access dynamically with variables
let drinkChoice = 0;
let pastryChoice = 2;
console.log("Variable selection:", drinks[drinkChoice], pastry[pastryChoice]);

// Task 5: Loop through drinks
console.log("--- All Drinks ---");
for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);
}

// Task 6: Add "flat white" and track length
drinks.push("flat white");
console.log("Updated drink count:", drinks.length);

// Final Task: Log selected order dynamically with two variables
let selectedDrink = drinks.length - 1; // Gets the flat white you just added
console.log("Latest order via dynamic variable:", drinks[selectedDrink]);
