
function random(max) {
    return Math.floor(Math.random() * (max + 1)); // Generates a random number between 0 and max
}

function convert(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hexCode(i) {
        return ("0" + parseInt(i).toString(16)).slice(-2);
    }
    return "#" + hexCode(rgb[1]) + hexCode(rgb[2]) + hexCode(rgb[3]);
}

let ChangingElement = document.querySelector('.circle');

document.addEventListener('click', function () {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    ChangingElement.style.backgroundColor = color;

    let hexDisplay = ChangingElement.querySelector('p');

    if (!hexDisplay) {
        hexDisplay = document.createElement('p');
        ChangingElement.appendChild(hexDisplay);
    }

    hexDisplay.textContent = convert(color); 
    hexDisplay.style.cssText = "font-weight:900;"
});
