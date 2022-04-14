/**
 * Author: Cameron Fergus <cameronfergus@me.com>
 * Company: 14Four, Inc.
 * Summary: Skills Assessment
 * Date: Apr 14, 2022
 */
// Assign HTML elements to variables
let toggler = document.getElementById('toggler');
let email = document.querySelectorAll('.email');
let phone = document.querySelectorAll('.phone');

// Create listener for input change
window.addEventListener('change', updateView);

// Create toggle function
function updateView() {
    // Create if/else to check value of selected option, then apply CSS accordingly
    if (toggler.value == 0) {
        // querySelectorAll returns a node list, so we need to use a for/each loop to apply the CSS change to all items in the list
        phone.forEach(phone => {
            phone.classList.add('hide')
            phone.classList.remove('show')
        })
        email.forEach(email => {
            email.classList.add('show')
            email.classList.remove('hide')
        })
    } else if (toggler.value == 1) {
        phone.forEach(phone => {
            phone.classList.add('show')
            phone.classList.remove('hide')
        })
        email.forEach(email => {
            email.classList.add('hide')
            email.classList.remove('show')
        })
    } else {
        // Default view
        email.forEach(email => {
            email.classList.add('show')
            email.classList.remove('hide')
        })
        phone.forEach(phone => {
            phone.classList.add('hide')
            phone.classList.remove('show')
        })
}};