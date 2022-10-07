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