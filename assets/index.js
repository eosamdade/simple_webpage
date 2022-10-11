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
    modal.style.display = 'none';
});

signUpBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});

// form validation
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

// show error
function showError (input,message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// show Valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

// Get fieldname
function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}



// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }
        else{
            showValid(input)
        }
    })
}

//Check Input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showValid(input);
    }
}

// Check password match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Password do not match')
    }
}

// Event Listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //preventdefault is not work its suppose to prevent the form from closing
    checkRequired([name, email, password, passwordConfirm]);
    checkLength(name,3 ,30);
    checkLength(password,8 ,25);
    checkLength(passwordConfirm,8 ,25);
    passwordMatch(password, passwordConfirm);
})

// nature gallery 
let fullImg = document.getElementsByClass('full-img');
let fullImgBox = document.querySelector('.pic-cell');

fullImgBox.addEventListener('click', function(e){
    e.preventDefault();
    console.log('hey');
})

//something wrong with the js
let picCell = document.querySelector('.gallery-heading');

picCell.addEventListener('click', () => {
    console.log('ping');
});