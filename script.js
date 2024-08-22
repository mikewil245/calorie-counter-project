// DOM Elements
let breakfastName = document.getElementById("breakfastName");
let lunchName = document.getElementById("lunchName");
let dinnerName = document.getElementById("dinnerName");
let snackName = document.getElementById("snacksName");
let exerciseName = document.getElementById("exerciseName");

let budget = document.getElementById("budget");
let breakfastCalories = document.getElementById("breakfastCalories");
let lunchCalories = document.getElementById("lunchCalories");
let dinnerCalories = document.getElementById("dinnerCalories");
let snacksCalories = document.getElementById("snacksCalories");
let exerciseCalories = document.getElementById("exerciseCalories");

let calculateBtn = document.getElementById("calculateBtn");
let clearBtn = document.getElementById("clearBtn");

let totalCalories = document.getElementById("totalCalories");
let remainingCalories = document.getElementById("remainingCalories");

// Event Listeners
calculateBtn.addEventListener("click", calculateCalories);
clearBtn.addEventListener("click", resetValues);

// Calculate Calories Function
function calculateCalories() {
  // Parse input values
  let budgetInput = parseInt(budget.value);
  let breakfastInput = parseInt(breakfastCalories.value);
  let lunchInput = parseInt(lunchCalories.value);
  let dinnerInput = parseInt(dinnerCalories.value);
  let snacksInput = parseInt(snacksCalories.value);
  let exerciseInput = parseInt(exerciseCalories.value);

  // Save to localStorage
  localStorage.setItem("budget", budgetInput);
  localStorage.setItem("breakfastCalories", breakfastInput);
  localStorage.setItem("lunchCalories", lunchInput);
  localStorage.setItem("dinnerCalories", dinnerInput);
  localStorage.setItem("snacksCalories", snacksInput);
  localStorage.setItem("exerciseCalories", exerciseInput);

  // Check if input fields are empty
  if (
    budget.value === "" ||
    breakfastCalories.value === "" ||
    lunchCalories.value === "" ||
    dinnerCalories.value === "" ||
    snacksCalories.value === "" ||
    exerciseCalories.value === ""
  ) {
    alert("Input fields can't be empty");
    return;
  }

  // Check if inputs are valid numbers
  if (
    isNaN(budgetInput) ||
    isNaN(breakfastInput) ||
    isNaN(lunchInput) ||
    isNaN(dinnerInput) ||
    isNaN(snacksInput) ||
    isNaN(exerciseInput)
  ) {
    alert("Numbers only");
    return;
  }

  // Check if any input is negative
  let inputs = [
    { value: budgetInput, name: "Budget" },
    { value: breakfastInput, name: "Breakfast calories" },
    { value: lunchInput, name: "Lunch calories" },
    { value: dinnerInput, name: "Dinner calories" },
    { value: snacksInput, name: "Snacks calories" },
    { value: exerciseInput, name: "Exercise calories" },
  ];

  for (let input of inputs) {
    if (input.value < 0) {
      alert(`${input.name} cannot be negative!`);
      return;
    }
  }

  // Calculate total and remaining calories
  let totalValue = breakfastInput + lunchInput + dinnerInput + snacksInput;
  let remainingValue = budgetInput - totalValue + exerciseInput;

  totalCalories.textContent = totalValue;

  if (remainingValue < 0) {
    alert("Warning: You have exceeded your calorie budget!");
  } else {
    remainingCalories.textContent = remainingValue;
  }
}

// Reset Values Function
function resetValues() {
  budget.value = "";
  breakfastCalories.value = "";
  lunchCalories.value = "";
  dinnerCalories.value = "";
  snacksCalories.value = "";
  exerciseCalories.value = "";
  breakfastName.value = "";
  lunchName.value = "";
  dinnerName.value = "";
  snackName.value = "";
  exerciseName.value = "";
  totalCalories.textContent = 0;
  remainingCalories.textContent = 0;
}

// Load stored values on page load
window.addEventListener("load", () => {
  budget.value = localStorage.getItem("budget") || "";
  breakfastCalories.value = localStorage.getItem("breakfastCalories") || "";
  lunchCalories.value = localStorage.getItem("lunchCalories") || "";
  dinnerCalories.value = localStorage.getItem("dinnerCalories") || "";
  snacksCalories.value = localStorage.getItem("snacksCalories") || "";
  exerciseCalories.value = localStorage.getItem("exerciseCalories") || "";
});
