// Get button elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Handle "Yes" button click
function handleYes() {
    document.body.classList.add('celebration');
    createHeartBurst();
    setTimeout(() => window.location.href = 'yes.html', 1200);
}

// Handle "No" button click
function handleNoClick() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    
    const messages = ["მართლა? 🥺", "ნამდვილად?", "გთხოვ? 💕", "ერთი შანსი 🌹"];
    noBtn.querySelector('.btn-text').textContent = messages[Math.floor(Math.random() * messages.length)];
}

// Handle "No" button hover
function handleNoHover() {
    const x = Math.random() * 150 - 75;
    const y = Math.random() * 150 - 75;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Create heart burst animation
function createHeartBurst() {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'burst-heart';
        heart.textContent = '💕';
        heart.style.cssText = `
            left: 50%;
            top: 50%;
            --angle: ${Math.random() * 360}deg;
            --distance: ${150 + Math.random() * 150}px;
            animation-delay: ${Math.random() * 0.2}s;
        `;
        fragment.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
    document.body.appendChild(fragment);
}

// Add event listeners
yesBtn.addEventListener('click', handleYes);
noBtn.addEventListener('click', handleNoClick);
noBtn.addEventListener('mouseover', handleNoHover);

// Parallax effect
let rafId;
document.addEventListener('mousemove', (e) => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        const frame = document.querySelector('.photo-frame');
        if (frame) {
            frame.style.transform = `translateZ(50px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
        }
        rafId = null;
    });
});