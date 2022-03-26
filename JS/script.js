const $renderBtn = document.querySelector('.renderBtn')
const $renderBtn2 = document.querySelector('.renderBtn2')
const $colors = document.querySelectorAll('.cards, h2')
function generatorColors() {
    $colors.forEach((color) => {
        const HEXColor = '#' + Math.random().toString(16).slice(2,8)
        color.style.backgroundColor = HEXColor
        color.innerHTML = HEXColor
        color.classList.add('colorHEX')
    })
}
generatorColors()
$renderBtn.addEventListener('click', () => {
    generatorColors()
})
// ADAPTIVE BUTTON
$renderBtn2.addEventListener('click', () => {
    generatorColors()
})
// ADAPTIVE BUTTON