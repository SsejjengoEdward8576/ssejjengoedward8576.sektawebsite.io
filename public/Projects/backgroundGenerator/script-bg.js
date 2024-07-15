const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradient = document.getElementById("gradient");
const cssCode = document.getElementById("cssCode");
const randomizeButton = document.getElementById("randomize");
const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");

// Initialize gradient with default colors
let selectedDirection = "to right";

function setGradient() {
    const gradientValue = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`;
    gradient.style.background = gradientValue;
    cssCode.textContent = `background: ${gradientValue};`;

    // Update background on DOM element
    document.body.style.background = gradientValue;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomizeButton.addEventListener("click", () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
});

saveButton.addEventListener("click", () => {
    localStorage.setItem("gradientColor1", color1.value);
    localStorage.setItem("gradientColor2", color2.value);
    alert("Gradient saved!");
});

loadButton.addEventListener("click", () => {
    const savedColor1 = localStorage.getItem("gradientColor1");
    const savedColor2 = localStorage.getItem("gradientColor2");
    if (savedColor1 && savedColor2) {
        color1.value = savedColor1;
        color2.value = savedColor2;
        setGradient();
        alert("Gradient loaded!");
    } else {
        alert("No saved gradient found.");
    }
});

// Initial setup
setGradient();
