# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![intro-section](intro-section.png)
![desktop-navigation](desktop drowndown.png)
![mobile-version](mobile.png)
![mobile-navigation](mobile dropdown.png)


### Links

- Solution URL: (https://github.com/ibimina/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned


 box shadow to cast shadow on the drop navigation
```css
 .primary-nav[data-visible="true"] {
        transform: translateX(0);
        box-shadow: 0 1rem 2rem 15rem rgba(0, 0, 0, 0.5);
    }

    .f-block {
        display: block;
        list-style: none;
        position: absolute;
        padding: 1.1rem;
        right: 68%;
        background-color: hsl(0, 0%, 100%);
        border-radius: 10px;
        color: hsl(0, 0%, 41%);
        min-width: 8rem;
        margin: 1rem;
        box-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.4);
    }

    .c-block {
        display: block;
        list-style: none;
        position: absolute;
        padding: 1rem;
        right: 47%;
        background-color: hsl(0, 0%, 100%);
        border-radius: 10px;
        color: hsl(0, 0%, 41%);
        margin: 1rem;
        box-shadow: 1px 1px 1rem rgba(0, 0, 0, 0.4);
    }
```

function to hide and display navigation menu,and also change the arrow image
```js
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
```

## Author

-Ibimina Hart
- Frontend Mentor - (https://www.frontendmentor.io/profile/ibimina)


