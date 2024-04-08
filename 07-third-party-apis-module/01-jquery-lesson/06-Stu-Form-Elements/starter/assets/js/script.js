var shoppingFormEl = $('#shopping-form');
let submittedItem = $('.form-input');
var shoppingListEl = $('#shopping-list');
let newShopEl = $('<li>')

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
let selected = [];

function handleFormSubmit(event) {
    event.preventDefault();

    $.each(submittedItem, function() {
        newShopEl.append(submittedItem.val());
        shoppingListEl.append(newShopEl);
    })
    
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);