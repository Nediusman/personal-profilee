// Toggle Project JavaScript
const toggleText = document.getElementById('toggleText');
const toggleButton = document.getElementById('toggleButton');
const stateIndicator = document.getElementById('stateIndicator');

// Track current state
let isOn = false;

// Toggle function
function toggleState() {
    isOn = !isOn;

    if (isOn) {
        toggleText.textContent = "ON";
        toggleText.style.color = "#2ecc71";
        stateIndicator.textContent = "ON";
        stateIndicator.style.color = "#2ecc71";
    } else {
        toggleText.textContent = "OFF";
        toggleText.style.color = "#e74c3c";
        stateIndicator.textContent = "OFF";
        stateIndicator.style.color = "#e74c3c";
    }
}

// Add event listener to button
toggleButton.addEventListener('click', toggleState);

// Existing portfolio JavaScript
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} soon.`);

    this.reset();
});

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});