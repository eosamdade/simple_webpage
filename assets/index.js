console.log("Hello World!")

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active')
})

// modal items
const modal = document.getElementById("email-modal")
const openBtn = document.querySelector(".main__btn")
const closeBtn = document.querySelector(".close-btn")
const signUpBtn = document.querySelector(".navbar__btn")

//click event
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
});

signUpBtn.addEventListener('click', () => {
    modal.style.display = 'block'
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none'
    }
});

// form validation
const form = documnet.getElementById("form");
const name = documnet.getElementById("name");
const email = documnet.getElementById("email");
const password = documnet.getElementById("password");
const password_confirm = documnet.getElementById("password-confirm");

// show error
function showError (input,message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error'

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// Event Listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password, password_confirm])
})

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(inputArr.value.trim() === '') {
            showError(input, 'Error')
        }
    })
}

