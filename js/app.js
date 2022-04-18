/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById("navbar__list"); 
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// const navBar = () => {
//     let navList = '';
//     sections.forEach(function(sections){
//         const sectionId = sections.id
//         const sectionData = sections.dataset.nav
//         navList += `<li><a class= "menu__link" href="#${sectionId}">${sectionData}</a></li>`
//     });

//     navigation.innerHTML = navList;
// };
// navBar();
const navBar = () => {

            sections.forEach((sections) => {
             const newEl = document.createElement('li');
             console.log(newEl)
             newEl.innerHTML = `<a class= "menu__link" href="#${sections.id}">${sections.dataset.nav}</a>`;
            navigation.appendChild(newEl);
        });
}
navBar();


// Add class 'active' to section when near top of viewport
 const inViewport = (el) => {
     let rect = el.getBoundingClientRect();
     return rect.top <= 250 && rect.bottom >= 250;
 }

 function sectionActivation () {
     sections.forEach((section) => {
         if (inViewport(section)){
             section.classList.add('your-active-class')
         }
         else{
            section.classList.remove('your-active-class') 
         }
     });
 }
 sectionActivation ();
 document.addEventListener('scroll', sectionActivation);


// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 

// // Scroll to section on link click

const clickLink = (event) => {
    smoothScroll(event);
}

const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href")
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
    });
}
document.addEventListener('click', clickLink);
// // Set sections as active

// Add class 'active' to section when near top of viewport


// Scroll smoothly to section on anchor click


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu



// Scroll to section on link click


// Set sections as active

