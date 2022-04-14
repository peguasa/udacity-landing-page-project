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
const sections = document.querySelectorAll("section");
const menuLink = document.querySelectorAll(".menu__link");
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
const navBar = () => {
    //using for of loop... to dynamically add items to the nav bar 
    for (section of sections) {
        const listItem = document.createElement("li");
        const sectionId = section.getAttribute("id");
        const sectionData = section.getAttribute("data-nav");
        listItem.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionData}</a>`;
        navigation.appendChild(listItem);
    }
};
navBar();



// Add class 'active' to section when near top of viewport

const sectionInViewport = (inView) => {
    // determine if section is near top of viewport
    let rect = inView.getBoundingClientRect();
    return rect.top <= 150 && rect.bottom >= 150;
};

// function to add active class to section in viewport
const addActive = () => {
    for (section of sections) {
        if (sectionInViewport(section)) {
            if (!section.classList.contains("your-active-class")) {
                section.classList.add("your-active-class");
            }
        } else {
            section.classList.remove("your-active-class");
        }
    }
};
document.addEventListener("scroll", addActive);

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const smoothScroll = () => {
    document.querySelectorAll(".menu__link").forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
};

smoothScroll();

// Set sections as active

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

