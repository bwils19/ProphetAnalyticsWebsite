document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

async function handleSubmit(e) {
    e.preventDefault();

    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        await fetch(e.target.action, {
            method: 'POST',
            body: new FormData(e.target)
        });

        showMessage('Thank you! We\'ll be in touch soon.', 'success');
        e.target.reset();
    } catch (error) {
        showMessage('Something went wrong. Please try again.', 'error');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = 'Submit';
    }
}

function showMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;

    const form = document.getElementById('contactForm');
    form.insertAdjacentElement('beforebegin', messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}