// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        projectCards.forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    fetch('submitForm.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('formMessage').textContent = 'Message sent successfully!';
            contactForm.reset();
        })
        .catch(error => {
            document.getElementById('formMessage').textContent = 'Something went wrong. Please try again.';
        });
});
