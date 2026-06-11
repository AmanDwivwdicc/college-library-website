const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "lime";
ctx.lineWidth = 0.3;

let a = 0;
let b = 0;

// Same as turtle.goto(0, 200)
let x = canvas.width / 2;
let y = canvas.height / 2 - 200;

// Turtle initially faces east (0 degrees)
let heading = 0;

ctx.beginPath();
ctx.moveTo(x, y);

function animate() {

    // turtle.forward(a)
    x += a * Math.cos(heading * Math.PI / 180);
    y += a * Math.sin(heading * Math.PI / 180);

    ctx.lineTo(x, y);
    ctx.stroke();

    // turtle.right(b)
    heading += b;

    a += 3;
    b += 1;

    if (b < 210) {
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 50);
    }
}

animate();