// Grab the schedule form
const scheduleForm = document.getElementById('scheduleForm');

// Event listener for form submission
scheduleForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const moveDate = document.getElementById('moveDate').value;
    const address = document.getElementById('address').value;

    alert(`Thank you for scheduling a move, ${name}!\nWe will contact you at ${email} to confirm your move on ${moveDate}.\nWe will be moving from: ${address}`);
});
const testimonialForm = document.getElementById('testimonial-form');

testimonialForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('testimonial-name').value;
    const message = document.getElementById('testimonial-message').value;

    alert(`Thank you for your testimonial, ${name}!\nYour message: "${message}"`);
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    alert("Thank you for your message! We'll get back to you shortly.");
});
