
var container = document.querySelector("#jumbotron");
var start = document.querySelector("#start")


document.getElementById('start').onclick = function() {
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

    var form1 = document.createElement("Form1");

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
    drinkSubmit.setAttribute("id", "submitDrink")
  
    form1.appendChild(select);
    form1.appendChild(drinkSubmit);
 
    document.getElementById("jumbotron").appendChild(form1);

// next
    drinkSubmit.addEventListener("click", function() {
        // DRINK CHOICE
        var drinkChoice = select.value;

        console.log(drinkChoice);

        container.innerHTML = "";
        var createH2 = document.createElement("h2");
        createH2.setAttribute("class", "mb-3");
        createH2.textContent = 'Any Cravings?'
        container.appendChild(createH2)

        var createH4 = document.createElement("h4");
        createH4.setAttribute("class", "mb-3");
        createH4.textContent = ("Give us an ingredient or a meal you have in mind, and we'll factor it into your recommendation!");
        container.appendChild(createH4);

        // food form
        



    })
}
