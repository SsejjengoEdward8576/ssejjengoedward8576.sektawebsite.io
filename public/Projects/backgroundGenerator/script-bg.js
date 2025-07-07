const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradient = document.getElementById("gradient");
const cssCode = document.getElementById("cssCode");
const randomizeButton = document.getElementById("randomize");
const saveButton = document.getElementById("save");
const loadButton = document.getElementById("load");
const directionSelect = document.getElementById("direction");
const copyCSSButton = document.getElementById("copyCSS");
const toast = document.getElementById("toast");

// Swatch spans (assume you have them in your labels, or update label <span>'s background dynamically)
const color1Swatch = color1.previousElementSibling;
const color2Swatch = color2.previousElementSibling;

// Initialize gradient with default colors and direction
function setGradient() {
    const selectedDirection = directionSelect.value;
    const gradientValue = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`;
    gradient.style.background = gradientValue;
    cssCode.textContent = `background: ${gradientValue};`;

    // Optionally: set page background to gradient preview
    // document.body.style.background = gradientValue;

    // Update color swatch backgrounds for accessibility
    if (color1Swatch) color1Swatch.style.background = color1.value;
    if (color2Swatch) color2Swatch.style.background = color2.value;
}

// Show toast notification
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("active");
    setTimeout(() => {
        toast.classList.remove("active");
    }, 2000);
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0").toUpperCase();
}

// Event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
directionSelect.addEventListener("change", setGradient);

randomizeButton.addEventListener("click", () => {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
    showToast("Colors randomized!");
});

saveButton.addEventListener("click", () => {
    localStorage.setItem("gradientColor1", color1.value);
    localStorage.setItem("gradientColor2", color2.value);
    localStorage.setItem("gradientDirection", directionSelect.value);
    showToast("Gradient saved!");
});

loadButton.addEventListener("click", () => {
    const savedColor1 = localStorage.getItem("gradientColor1");
    const savedColor2 = localStorage.getItem("gradientColor2");
    const savedDirection = localStorage.getItem("gradientDirection");
    if (savedColor1 && savedColor2 && savedDirection) {
        color1.value = savedColor1;
        color2.value = savedColor2;
        directionSelect.value = savedDirection;
        setGradient();
        showToast("Gradient loaded!");
    } else {
        showToast("No saved gradient found.");
    }
});

copyCSSButton.addEventListener("click", () => {
    navigator.clipboard.writeText(cssCode.textContent)
        .then(() => showToast("CSS copied!"))
        .catch(() => showToast("Copy failed!"));
});

// Initialize on page load
window.addEventListener("DOMContentLoaded", setGradient);