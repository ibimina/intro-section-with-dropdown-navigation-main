
const nav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

const arrow = document.querySelectorAll('.arrow')
const feature = document.querySelector('.feature')
const company = document.querySelector('.company')
const feaDropdown = document.querySelector('.feadropdown')
const comDropdown = document.querySelector('.comdropdown')


feature.addEventListener('click', feaOption)
company.addEventListener('click', comOption)


function feaOption() {

    if (feaDropdown.className.includes('none')) {
        feaDropdown.setAttribute('class', 'f-block')
        arrow[0].src = 'images/icon-arrow-up.svg'
        
    } else if (feaDropdown.className.includes = 'f-block') {
        feaDropdown.setAttribute('class', 'none')
        arrow[0].src = 'images/icon-arrow-down.svg'
    } 
}

function comOption() {
    if (comDropdown.className.includes('none')) {
        comDropdown.setAttribute('class', 'c-block')
        arrow[1].src = 'images/icon-arrow-up.svg'
    } else if (comDropdown.className.includes = 'c-block') {
        comDropdown.setAttribute('class', 'none')
        arrow[1].src = 'images/icon-arrow-down.svg'
    }
}