
var container = document.querySelector("#jumbotron");
var start = document.querySelector("#start")


var options = {};

start.addEventListener("click", function() {

    drinkQuestion()
});



function drinkQuestion() {
    container.innerHTML = "";
    var createH2 = document.createElement("h2");
    createH2.setAttribute("class", "mb-3");
    createH2.textContent = 'Pick Your Poison'
    container.appendChild(createH2)

    var createH4 = document.createElement("h4");
    createH4.setAttribute("class", "mb-3");
    createH4.textContent = ("Any liquor preferences? Select one from the list below!");
    container.appendChild(createH4);

//  dropdown list drink prompt
    var form = document.createElement("form");
    var values = ["Vodka", "Gin", "Rum", "Tequila", "Whiskey"];
 
    var select = document.createElement("select");
    select.name = "alch";
    select.id = "alch"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var drinkSubmit = document.createElement("input");
    drinkSubmit.setAttribute("type", "submit");
    drinkSubmit.setAttribute("value", "Next");
    drinkSubmit.setAttribute("class", "btn btn-primary");
    drinkSubmit.setAttribute("id", "submitDrink");
    form.appendChild(select);
    form.appendChild(drinkSubmit);
    container.appendChild(form);

    function handleDrinkSubmit(e) {
        var drinkChoice = select.value;
        if (drinkChoice == "") {
            alert("Please select an option");
            return;
        } 
        e.preventDefault();
    
        console.log(drinkChoice);
        options['drinkChoice'] = drinkChoice;
    
        foodQuestion();
    }

    drinkSubmit.addEventListener('click', handleDrinkSubmit);
};

function foodQuestion() {
    container.innerHTML = "";
    var createH2 = document.createElement("h2");
    createH2.setAttribute("class", "mb-3");
    createH2.textContent = 'Any Cravings?'
    container.appendChild(createH2)

    var createH4 = document.createElement("h4");
    createH4.setAttribute("class", "mb-3");
    createH4.textContent = ("Select a food category!");
    container.appendChild(createH4);

    // food form
    var form = document.createElement("form");
    var values = ["Beef", "Chicken", "Seafood", "Pasta", "Vegetarian", "Vegan", "Starter", "Side", "Dessert", "Miscellaneous" ];
 
    var select = document.createElement("select");
    select.name = "grub";
    select.id = "grub"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }

    var foodSubmit = document.createElement("input");
    foodSubmit.setAttribute("type", "submit");
    foodSubmit.setAttribute("value", "Next");
    foodSubmit.setAttribute("class", "btn btn-primary");
    foodSubmit.setAttribute("id", "submitFood");
    form.appendChild(select);
    form.appendChild(foodSubmit);
    container.appendChild(form);

    function handleFoodSubmit(e) {
        var foodChoice = select.value;
        if (foodChoice == "") {
            alert("Please select a category");
            return;
        } 
        e.preventDefault();

        console.log(foodChoice);
        options['foodChoice'] = foodChoice;
    
        console.log(options);
        store(options)
        window.location.replace('rec.html');
    
    }

    foodSubmit.addEventListener('click', handleFoodSubmit);
};

function store(object) {

    var storeOptions = localStorage.getItem("storeOptions");
    if (storeOptions === null) {
        storeOptions = [];
    } else {
        storeOptions = JSON.parse(storeOptions);
    }
    storeOptions.push(options);
    var newInput = JSON.stringify(storeOptions);
    localStorage.setItem("storeOptions", newInput);
    console.log(localStorage);
};

