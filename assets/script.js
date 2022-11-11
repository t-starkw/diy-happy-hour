// Listing global variables
var cocktailApiRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
var mealApiRoot = 'https://www.themealdb.com/api/json/v1/1/';

var drinkContainer = document.querySelector('#drinkContainer');
var mealContainer = document.querySelector('#mealContainer');


var storeOptions = localStorage.getItem("storeOptions");
storeOptions = JSON.parse(storeOptions);


var optionIndex = storeOptions.length - 1;


function fetchDrink(input) {
    var input = storeOptions[optionIndex].drinkChoice
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
            })
            .catch(function(err) {
                console.error(err);
            })
}

// function fetchMeal(input) {
//     var input= input;
//     var apiUrl = `${mealApiRoot}filter.php?i=${ input }`;
//     console.log(apiUrl);

//     fetch(apiUrl)
//         .then(
//             function(res) {
//                 return res.json();
//             })
//             .then(
//                 function(meals) {
//                 console.log("DATA", meals);
//                 randomMeal(meals)
//             })
//             .catch(function(err) {
//                 console.error(err);
//             })
// }

// console.log(storeOptions);
// console.log(storeOptions[optionIndex].drinkChoice);