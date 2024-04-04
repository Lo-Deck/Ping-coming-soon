# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![screenshot desktop](https://github.com/Lo-Deck/Intro-component-with-sign-up-form/blob/main/screenshot/Intro%20component%20with%20sign%20up%20form-desktop-Validate.png).
![screenshot mobile](https://github.com/Lo-Deck/Intro-component-with-sign-up-form/blob/main/screenshot/Intro%20component%20with%20sign%20up%20form-mobile-Validate.png).

![screenshot desktop-NoValidate](https://github.com/Lo-Deck/Intro-component-with-sign-up-form/blob/main/screenshot/Intro%20component%20with%20sign%20up%20form-desktop-NoValidate.png).
![screenshot mobile-NoValidate](https://github.com/Lo-Deck/Intro-component-with-sign-up-form/blob/main/screenshot/Intro%20component%20with%20sign%20up%20form-mobile-NoValidate.png).

### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Intro-component-with-sign-up-form).
- Live Site URL: [Website](https://lo-deck.github.io/Intro-component-with-sign-up-form/).



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-JS


### What I learned

Validate a `<form>` with differents `<input>` and send an error message for each of them.

I used the display properties to hidde the error message with a listener on the form submit.


```js
   error[i].style.display = 'inline';
   myForm[i].style.border = 'red 1px solid';
   myForm[i].placeholder = '';
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.