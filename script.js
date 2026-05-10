history.scrollRestoration = "manual";

window.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".fondo-animado");

    const codes = [
        "{ }", "</>", "const", "function()", "if()",
        "HTML", "CSS", "JS", "Python", "React",
        "Node", "Firebase", "AI", "return"
    ];

    function createCode() {
        const span = document.createElement("span");

        span.innerText = codes[Math.floor(Math.random() * codes.length)];

        const duration = 4 + Math.random() * 6;

        span.style.left = Math.random() * 100 + "%";
        span.style.fontSize = (20 + Math.random() * 35) + "px";
        span.style.opacity = 0.1 + Math.random() * 0.4;
        span.style.animationDuration = duration + "s";
        span.style.animationDelay = Math.random() * 2 + "s";

        container.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, duration * 1000);
    }

    setInterval(createCode, 300);
});

