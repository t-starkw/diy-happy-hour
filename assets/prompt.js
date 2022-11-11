
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

    drinkSubmit.addEventListener("click", function() {
        // DRINK CHOICE
        var drinkChoice = select.value;
        console.log(drinkChoice);
        options['drinkChoice'] = drinkChoice;

        foodQuestion();
});
};

function foodQuestion() {
    container.innerHTML = "";
    var createH2 = document.createElement("h2");
    createH2.setAttribute("class", "mb-3");
    createH2.textContent = 'Any Cravings?'
    container.appendChild(createH2)

    var createH4 = document.createElement("h4");
    createH4.setAttribute("class", "mb-3");
    createH4.textContent = ("Give us an ingredient you have in mind, and we'll factor it into your recommendation!");
    container.appendChild(createH4);

    // food form
    var form = document.createElement("form");

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "ingredients");


    var foodSubmit = document.createElement("input");
    foodSubmit.setAttribute("type", "submit");
    foodSubmit.setAttribute("value", "See My Results");
    foodSubmit.setAttribute("class", "btn btn-primary");
    foodSubmit.setAttribute("id", "foodSubmit");
    
    form.appendChild(input);
    form.appendChild(foodSubmit);
    container.appendChild(form);

    foodSubmit.addEventListener("submit", function() {
        var foodChoice = input.value.trim();
        console.log(foodChoice);
    
        if (foodChoice === "") {
            console.log("No ingredient entered")
            window.alert("Please enter an ingredient");
    
        } else {
            options['foodChoice'] = foodChoice;
        };
        console.log(options);
        store(options)
        window.location.replace('rec.html');

});
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

