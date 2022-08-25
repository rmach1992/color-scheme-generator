document.getElementById('color-btn').addEventListener('click', callColorApi)

function callColorApi() {
    const colorHex = document.getElementById('color').value.substring(1)
    const schemeMode = document.getElementById('mode').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${schemeMode}`)
        .then(response => response.json())
        .then(data => renderColors(data.colors))
}

function renderColors(colorArray) {
    document.getElementById('color-display').innerHTML = colorArray.map(color => {
        const hexValue = color.hex.value
        return `<div class="sub-container">
                    <div class="colors" style="background-color:${hexValue};">
                    </div>
                    <p>${hexValue}</p>
                </div>`
    }).join('')
}