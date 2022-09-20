"use strict"
//This function adds the cards to the html
function renderCoffee(coffee) {
    switch(coffee.roast){
        case "light": {
            var html = ` <div class="card">
        <div class="card-body light">
            <h5 class="card-subtitle mb-2">${coffee.name}</h5>
            <p class="card-text">${coffee.roast.toUpperCase()}</p> 
        </div>
    </div>`
            break;
        }
        case "medium": {
            var html = ` <div class="card">
        <div class="card-body medium">
            <h5 class="card-subtitle mb-2">${coffee.name}</h5>
            <p class="card-text">${coffee.roast.toUpperCase()}</p> 
        </div>
    </div>`
            break;
        }
        case "dark": {
            var html = ` <div class="card">
        <div class="card-body dark">
            <h5 class="card-subtitle mb-2">${coffee.name}</h5>
            <p class="card-text">${coffee.roast.toUpperCase()}</p> 
        </div>
    </div>`
            break;
        }

    }

    return html;
}


// Naz- Gutted the inside of the for parameter and started from scratch to reverse its order
function renderCoffees(coffees) {
    var html = '';
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//This function filters the coffee when clicking the dropdown
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value.toLowerCase();
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if (selectedRoast === "all"){
            filteredCoffees.push(coffee);
            console.log(filteredCoffees);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//Function that filters through the coffees when using the search bar
function lookForCoffee() {
    //The roast variable turns anything typed in the search box to lower case
    let roast = search.value.toLowerCase();
    let searchedCoffees = [];
    coffees.forEach(function(coffee){
        if (coffee.name.toLowerCase().includes(roast)) {
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchedCoffees);
}


//This function lets you add a new coffee card
function addCoffee(e) {
    e.preventDefault();
    let newCoffee = {
        id : coffees.length + 1,
        name : newCoffeeName.value,
        roast : addRoast.value.toLowerCase()
    }
    coffees.push(newCoffee);
}
//Event listeners and ID's for the function to add coffee
let addRoast = document.querySelector('#typeOfRoasts');
let newCoffeeName = document.querySelector('#addCoffee');
let newCoffeeSubmitButton = document.querySelector('#pushToCoffee');
newCoffeeSubmitButton.addEventListener('click', addCoffee);


newCoffeeSubmitButton.addEventListener('click', lookForCoffee)
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
var updateRoast = document.querySelector('#roast-selection');
updateRoast.addEventListener('change', updateCoffees)
submitButton.addEventListener('click', lookForCoffee);


//This search calls to the search input ID in html
let search = document.querySelector("#search");

//This will call to the function that searches for coffees when anything in the search input is typed
search.addEventListener('keyup', lookForCoffee);

