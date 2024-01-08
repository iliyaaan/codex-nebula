// js for animation of logo
function fadeInOutLoop() {
    var image = document.getElementById('img');

    image.classList.add('active');

    setTimeout(function () {
      
        image.classList.remove('active');

        setTimeout(fadeInOutLoop, 2000); 
    }, 2000); 
}

// Start the animation loop
fadeInOutLoop();



// js for form validation

const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const country = document.getElementById('country');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateForm()) {
        // If the form is valid, redirect to the next page
        window.location.href = 'http://127.0.0.1:5501/index2.html';  // Replace 'next_page.html' with the actual URL of the next page
    }
});

[fullname, email, phonenumber, country].forEach(field => {
    field.addEventListener('input', () => validateField(field));
    field.addEventListener('blur', () => validateField(field));
});

function validateField(field) {
    const value = field.value.trim();
    resetErrors(field);

    if (value === '') {
        setError(field, 'This field is required');
    } else if (field === email && !isValidEmail(value)) {
        setError(field, 'Provide a valid email address');
    } else if (field === country && value.toLowerCase() === 'syria') {
        setError(field, 'Sorry, we cannot process requests from Syria');
    } else {
        setSuccess(field);
    }
}

function validateForm() {
    let isValid = true;

    [fullname, email, phonenumber, country].forEach(field => {
        const value = field.value.trim();
        resetErrors(field);

        if (value === '') {
            setError(field, 'This field is required');
            isValid = false;
        } else if (field === email && !isValidEmail(value)) {
            setError(field, 'Provide a valid email address');
            isValid = false;
        } else if (field === country && value.toLowerCase() === 'syria') {
            setError(field, 'Sorry, we cannot process requests from Syria');
            isValid = false;
        }
    });

    return isValid;
}

function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

function resetErrors(field) {
    const inputControl = field.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.remove('error', 'success');
}

function setError(field, message) {
    const inputControl = field.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
}

function setSuccess(field) {
    const inputControl = field.parentElement;
    inputControl.classList.add('success');
}


// js for showing info in console
form.addEventListener('submit', e => {
    e.preventDefault();

    if (validateForm()) {
        // Log the form input information to the console
        console.log('Form submitted with the following data:');
        console.log('Full Name:', fullname.value);
        console.log('Email:', email.value);
        console.log('Phone Number:', phonenumber.value);
        console.log('Country:', country.value);
        
       
    }
});

















