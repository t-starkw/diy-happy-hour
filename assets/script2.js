
// Listing global variables
var drinkApiRoot = 'https://www.thecocktaildb.com/api/json/v1/1/';
var mealApiRoot = 'https://www.themealdb.com/api/json/v1/1/';

// DOM element references
var nameForm = document.querySelector('#name');
var inputName = document.querySelector('#fname');
var nameRec = document.querySelector('#nameRec');
var drinkContainer = document.querySelector('#drinkContainer');
var mealContainer = document.querySelector('#mealContainer');



// event listener for search bar
function handleSearchFormSubmit(e) {
    if (!inputName.value) {
        alert("Please Enter Your Name");
        return;
    }
    e.preventDefault();
    var name = inputName.value.trim();
    var firstLetter = name[0];
    console.log(firstLetter);

    var newHeading = document.createElement('h2');
    newHeading.textContent = name + ", Here are your personalized recommendations! Enjoy!"
    nameRec.innerHTML='';
    mealContainer.innerHTML='';
    drinkContainer.innerHTML='';
    nameRec.append(newHeading);
    
    fetchDrink(firstLetter);
    fetchMeal(firstLetter);
    inputName.value = '';
}
nameForm.addEventListener('submit', handleSearchFormSubmit);

// fetching drink data
function fetchDrink(firstLetter) {
    var letter= firstLetter;
    var apiUrl = `${drinkApiRoot}search.php?f=${ letter }`;
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

// randomization function
function randomDrink(object) {
    var length = object.drinks.length;
    console.log(length);
    var randIndex = Math.floor(Math.random() * length);
    console.log(randIndex);
    var randDrinkArray = object.drinks[randIndex];
    console.log(randDrinkArray);
    appendDrink(randDrinkArray);
}

// append recommendation
function appendDrink(object) {
    // Creating variables for drink name, image, and description
    var drinkTitle = object.strDrink;
    var drinkImg = object.strDrinkThumb;
    // var drinkIngredients = '';

    // creating heading, img, and list elements for drink details
    var title = document.createElement('h3');
    var img = document.createElement('img');
    // var description = document.createElement('p');

    // assigning values from array to appendable elements
    title.textContent = drinkTitle;
    img.setAttribute('src', drinkImg);

    // appending elements to HTML
    drinkContainer.append(title);
    drinkContainer.append(img);
    


}

// fetching meal data
function fetchMeal(firstLetter) {
    var letter= firstLetter;
    var apiUrl = `${mealApiRoot}search.php?f=${ letter }`;
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

// randomization function
function randomMeal(object) {
    var length = object.meals.length;
    console.log(length);
    var randIndex = Math.floor(Math.random() * length);
    console.log(randIndex);
    var randMealArray = object.meals[randIndex];
    console.log(randMealArray);
    appendMeal(randMealArray);
}

// append recommendation
function appendMeal(object) {
    // Creating variables for drink name, image, and description
    var mealTitle = object.strMeal;
    var mealImg = object.strMealThumb;
    // var drinkIngredients = '';

    // creating heading, img, and list elements for drink details
    var title = document.createElement('h3');
    var img = document.createElement('img');
    // var description = document.createElement('p');

    // assigning values from array to appendable elements
    title.textContent = mealTitle;
    img.setAttribute('src', mealImg);

    // appending elements to HTML
    mealContainer.append(title);
    mealContainer.append(img);


}
