
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

    var form1 = document.createElement("form");

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
        createH4.textContent = ("Give us an ingredient you have in mind, and we'll factor it into your recommendation!");
        container.appendChild(createH4);

        // food form
        var form2 = document.createElement("form");

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", "ingredients");


        var foodSubmit = document.createElement("input");
        foodSubmit.setAttribute("type", "submit");
        foodSubmit.setAttribute("value", "See My Results");
        foodSubmit.setAttribute("class", "btn btn-primary");
        foodSubmit.setAttribute("id", "foodSubmit");
        
        form2.appendChild(input);
        form2.appendChild(foodSubmit);
     
        document.getElementById("jumbotron").appendChild(form2);

        foodSubmit.addEventListener("click", function() {
            var foodChoice = input.value.trim();
            console.log(foodChoice);

            if (foodChoice === "") {
                console.log("No ingredient entered")
                window.alert("Please enter an ingredient");
    
            } else {
                var options = {
                    drinkChoice: drinkChoice,
                    foodChoice: foodChoice,
                }
            }
            console.log(options) 
            var storeOptions = localStorage.getItem("storeOptions");
            if (storeOptions === null) {
                storeOptions = [];
            } else {
                storeOptions = JSON.parse(storeOptions);
            }
            storeOptions.push(options);
            var newInput = JSON.stringify(storeOptions);
            localStorage.setItem("storeOptions", newInput);
            window.location.replace("rec.html");
            

        })
    })
}
