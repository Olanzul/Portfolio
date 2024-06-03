
function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior : 'smooth'});
    }
}

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');

link1.addEventListener('click', () => {
    scrollToElement('header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with 'header' class
    scrollToElement('.features');
});

link3.addEventListener('click', () => {
    scrollToElement('footer');
});


// Submit Form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        // Gather form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Validate form data (basic validation example)
        if (name && email && subject && message) {
            alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
            
            // Reset the form
            form.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
