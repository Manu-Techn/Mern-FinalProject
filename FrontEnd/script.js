document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector('.circle');
    const text = document.getElementById('breathe-text');
    const phases = [
        { label: 'Breathe in...', class: 'breathe-in' },
        { label: 'Hold...', class: 'hold' },
        { label: 'Breathe out...', class: 'breathe-out' }
    ];
    let i = 0;

    function breathe() {
        const phase = phases[i % phases.length];
        text.textContent = phase.label;
        circle.className = 'circle ' + phase.class; // resets and adds correct class
        i++;
    }

    setInterval(breathe, 4000); // every 4 seconds
    breathe(); // start immediately
});

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mood Companion Script
async function showMessage(mood) {
    const messageBox = document.getElementById("message-box");
    const aiMessage = document.getElementById("ai-message");

    aiMessage.innerText = "Thinking...";
    messageBox.style.display = "block";

    try {
        const response = await fetch("/api/mood", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ mood }),
        });

        const data = await response.json();
        aiMessage.innerText = data.message;
    } catch (error) {
        aiMessage.innerText = "Sorry, something went wrong. Please try again later!";
    }
}