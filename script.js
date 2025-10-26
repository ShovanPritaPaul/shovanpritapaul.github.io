const canvas = document.getElementById('ring');
const ctx = canvas.getContext('2d');
const size = canvas.width;
let angle = 0;

function drawRing() {
    ctx.clearRect(0, 0, size, size);

    const gradient = ctx.createConicGradient(angle, size/2, size/2);
    gradient.addColorStop(0, '#ff6b81');
    gradient.addColorStop(0.25, '#ff4757');
    gradient.addColorStop(0.5, '#ff6b81');
    gradient.addColorStop(0.75, '#ff4757');
    gradient.addColorStop(1, '#ff6b81');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 3, 0, 2 * Math.PI);
    ctx.stroke();

    angle += 0.01; // rotation speed
    requestAnimationFrame(drawRing);
}

drawRing();
