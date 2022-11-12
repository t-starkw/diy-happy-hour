// Listing global variables
var cocktailApiRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
var mealApiRoot = 'https://www.themealdb.com/api/json/v1/1/';

var container = document.querySelector('#container');


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

    var drinkTitle = object.strDrink;
    var drinkImg = object.strDrinkThumb;

    var card = document.createElement("div");
    var thumb = document.createElement('img');
    var cardBody = document.createElement('div');
    var cardTitle = document.createElement('h3')
    var cardP = document.createElement('p');

    card.setAttribute("class", "card");
    thumb.setAttribute("src", drinkImg);
    cardBody.setAttribute("class", "card-body");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = drinkTitle;
    cardP.setAttribute("class", "card-text");

    card.appendChild(thumb, cardBody);
    cardBody.appendChild(cardTitle, cardP);

    container.append(card);

};

// fetch food
function fetchMeal(input) {
    var input = input;
    var apiUrl = `${mealApiRoot}filter.php?i=${input}`;
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

    var mealTitle = object.strMeal;
    var mealImg = object.strMealThumb;

    var card = document.createElement("div");
    var thumb = document.createElement('img');
    var cardBody = document.createElement('div');
    var cardTitle = document.createElement('h3')
    var cardP = document.createElement('p');

    card.setAttribute("class", "card");
    thumb.setAttribute("src", mealImg);
    cardBody.setAttribute("class", "card-body");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = mealTitle;
    cardP.setAttribute("class", "card-text");

    card.appendChild(thumb, cardBody);
    cardBody.appendChild(cardTitle, cardP);

    container.append(card);

};
