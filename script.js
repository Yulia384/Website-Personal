// Contoh sederhana untuk form
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will contact you soon.');
    form.reset();
});


