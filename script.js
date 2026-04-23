// Toggle threat details
function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isVisible = details.style.display !== 'none';
    
    details.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Learn More' : 'Hide Details';
}

// Submit quiz
function submitQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    
    if (!q1 || !q2 || !q3) {
        alert('Please answer all questions before submitting!');
        return;
    }
    
    const correctAnswers = ['correct', 'correct', 'correct'];
    const userAnswers = [q1, q2, q3];
    
    let score = 0;
    userAnswers.forEach((answer) => {
        if (answer === 'correct') score++;
    });
    
    const resultDiv = document.getElementById('quiz-result');
    const percentage = (score / 3) * 100;
    
    if (percentage === 100) {
        resultDiv.className = 'correct';
        resultDiv.innerHTML = `<p>🎉 Perfect Score! You got ${score}/3 correct!</p><p>You're a cybersecurity champion!</p>`;
    } else if (percentage >= 66) {
        resultDiv.className = 'correct';
        resultDiv.innerHTML = `<p>✓ Great Job! You got ${score}/3 correct!</p><p>You have a solid understanding of cybersecurity.</p>`;
    } else {
        resultDiv.className = 'incorrect';
        resultDiv.innerHTML = `<p>✗ You got ${score}/3 correct (${Math.round(percentage)}%)</p><p>Keep learning! Review the sections above to improve your knowledge.</p>`;
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when a link is clicked
if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.style.display = 'none';
        });
    });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slideInLeft 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.threat-card, .tip-card, .resource-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add password strength indicator function
function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    return strength;
}

// Initialize
window.addEventListener('load', function() {
    console.log('Cyber Awareness Website loaded successfully!');
});