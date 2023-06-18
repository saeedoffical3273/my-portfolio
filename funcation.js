// !........filter-button.....!

const filterButtons = document.querySelectorAll('.controls li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.style.display = 'block'; 
      } else {
        item.style.display = 'none'; 
      }
    });
  });
});

// !...............Scroll-button............!

const scrollButton = document.querySelector(".btoon");

// Show the scroll button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

// Scroll to the top when the button is clicked
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// !.........Nav-Sectaion........!

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// !..........Navbar-click-function.........!

const activesection2 = document.querySelector(".menu-link-2");
const activesection3 = document.querySelector(".menu-link-3");
const activesection4 = document.querySelector(".menu-link-4");
const activesection5 = document.querySelector(".menu-link-5");
const activesection6 = document.querySelector(".menu-link-6");
const activesection7 = document.querySelector(".menu-link-7");

activesection2.addEventListener("click", () => {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});
activesection3.addEventListener("click", () => {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
});
activesection4.addEventListener("click", () => {
  window.scrollTo({
    top: 1300,
    behavior: "smooth",
  });
});
activesection5.addEventListener("click", () => {
  window.scrollTo({
    top: 1860,
    behavior: "smooth",
  });
});
activesection6.addEventListener("click", () => {
  window.scrollTo({
    top: 2420,
    behavior: "smooth",
  });
});
activesection7.addEventListener("click", () => {
  window.scrollTo({
    top: 3320,
    behavior: "smooth",
  });
});

// !........sticky-navbar ...........!

// Get the navbar element
var navbar = document.getElementById("myNavbar");

// Get the initial offset position of the navbar
var sticky = navbar.offsetTop;

// Function to add the "sticky" class to the navbar
function addStickyClass() {
  if (window.pageYOffset >= 200) {
    navbar.classList.add("sticky");
   
  } else {
    navbar.classList.remove("sticky");
  }
}

// Call the addStickyClass function when the user scrolls the page
window.onscroll = function() {
  addStickyClass({
    behavior: "smooth",
  });
  
};




// Get all elements that need to be animated
const mainImg = document.querySelector('#about .main-img');
const heading = document.querySelector('#about h2');
const paragraph = document.querySelector('#about p');
const animatedElements = document.querySelectorAll('#about .row .col-md-3');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add 'show' class to visible elements
function handleScroll() {
    if (isInViewport(mainImg)) {
        mainImg.classList.add('show');
    }
    if (isInViewport(heading)) {
        heading.classList.add('show');
    }
    if (isInViewport(paragraph)) {
        paragraph.classList.add('show');
    }
    animatedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Add event listener to handleScroll on scroll event
window.addEventListener('scroll', handleScroll);

// Trigger handleScroll initially to animate visible elements on page load
handleScroll();

