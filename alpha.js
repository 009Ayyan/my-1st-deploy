const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () =>{
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});


var typed = new Typed(".auto-type",{
    strings:["LEARNER","ENGINEER","PROGAMMER","CODER","GAMMER"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})
/*-------*/
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme preference
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Simple validation example
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Form is valid, handle submission here (e.g., send an email or show a thank you message)
    alert('Thank you for your message!');
    contactForm.reset(); // Reset form fields after submission
});
