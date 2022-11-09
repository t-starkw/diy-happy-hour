// Listing global variables
var cocktailApiRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
var mealApiRoot = 'https://www.themealdb.com/api/json/v1/1/';

var drinkContainer = document.querySelector('#drinkContainer');
var mealContainer = document.querySelector('#mealContainer');

function fetchDrink(input) {
    var input = input
    var apiUrl = `${drinkApiRoot}filter.php?i=${ input }`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then(
            function(res) {
                return res.json();
            })
            .then(
                function(drinks) {
                console.log("DATA", drinks);
                    randomDrink(drinks);
            })
            .catch(function(err) {
                console.error(err);
            })
}

function fetchMeal(input) {
    var input= input;
    var apiUrl = `${mealApiRoot}filter.php?i=${ input }`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then(
            function(res) {
                return res.json();
            })
            .then(
                function(meals) {
                console.log("DATA", meals);
                randomMeal(meals)
            })
            .catch(function(err) {
                console.error(err);
            })
}

console.log(localStorage);