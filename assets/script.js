// Listing global variables
var cocktailApiRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
var mealApiRoot = 'https://www.themealdb.com/api/json/v1/1/';

var drinkCard = document.querySelector('#drinkCard');
var foodCard = document.querySelector('#foodCard');
var drinkImg = document.querySelector('#drinkImg');
var foodImg = document.querySelector('#foodImg');
var drinkTitle = document.querySelector('#drinkTitle');
var foodTitle = document.querySelector('#foodTitle');

var storeOptions = localStorage.getItem("storeOptions");
storeOptions = JSON.parse(storeOptions);
console.log(storeOptions);


var optionIndex = storeOptions.length - 1;
console.log(optionIndex);


// fetch drink
function fetchDrink(input) {
    var input = input;
    var apiUrl = `${cocktailApiRoot}filter.php?i=${input}`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then(
            function(res) {
                return res.json();
            })
            .then(
                function(drinks) {
                    console.log("DATA", drinks)
                    randomDrink(drinks);
                }
            )
            .catch(function(err) {
                console.error(err);
            })
};

fetchDrink(storeOptions[optionIndex].drinkChoice);

// random drink from array
function randomDrink(object) {
    var length = object.drinks.length;
    console.log(length);
    var randIndex = Math.floor(Math.random() * length);
    console.log(randIndex);
    var randDrinkArray = object.drinks[randIndex];
    console.log(randDrinkArray);
    appendDrink(randDrinkArray);
}

function appendDrink(object) {

    var drinkName = object.strDrink;
    var drinkThumb = object.strDrinkThumb;

    drinkTitle.textContent = drinkName;
    drinkImg.setAttribute("src", drinkThumb);



};

// fetch food
function fetchMeal(input) {
    var input = input;
    var apiUrl = `${mealApiRoot}filter.php?c=${input}`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then(
            function(res) {
                return res.json();
            })
            .then(
                function(meals) {
                    console.log("DATA", meals)
                    randomMeal(meals);
                }
            )
            .catch(function(err) {
                console.error(err);
            })
};

fetchMeal(storeOptions[optionIndex].foodChoice);

// random food from array
function randomMeal(object) {
    var length = object.meals.length;
    console.log(length);
    var randIndex = Math.floor(Math.random() * length);
    console.log(randIndex);
    var randMealArray = object.meals[randIndex];
    console.log(randMealArray);
    appendMeal(randMealArray);
}

function appendMeal(object) {

    var mealName = object.strMeal;
    var mealThumb = object.strMealThumb;

    foodTitle.textContent = mealName;
    foodImg.setAttribute("src", mealThumb);


};
