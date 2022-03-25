const $renderBtn = document.querySelector('.renderBtn')
const $renderBtn2 = document.querySelector('.renderBtn2')
const $bG = document.querySelector('.colors')
const $bG2 = document.querySelector('.colors2')
const $bG3 = document.querySelector('.colors3')
const $bG4 = document.querySelector('.colors4')
const $bG5 = document.querySelector('.colors5')
const $hex = document.querySelector('.hex')
const $hex2 = document.querySelector('.hex2')
const $hex3 = document.querySelector('.hex3')
const $hex4 = document.querySelector('.hex4')
const $hex5 = document.querySelector('.hex5')

$renderBtn.addEventListener('click' , () => {
    let color = '#'
    let color2 = '#'
    let color3 = '#'
    let color4 = '#'
    let color5 = '#'
    color += Math.random().toString(16).slice(2,8)
    color2 += Math.random().toString(16).slice(2,8)
    color3 += Math.random().toString(16).slice(2,8)
    color4 += Math.random().toString(16).slice(2,8)
    color5 += Math.random().toString(16).slice(2,8)
    $bG.style.background = color;
    $bG2.style.background = color2;
    $bG3.style.background = color3;
    $bG4.style.background = color4;
    $bG5.style.background = color5;
    $hex.innerHTML = color;
    $hex2.innerHTML = color2;
    $hex3.innerHTML = color3;
    $hex4.innerHTML = color4
    $hex5.innerHTML = color5;
})

// ADAPTIVE BUTTON
$renderBtn2.addEventListener('click', () => {
    let color = '#'
    let color2 = '#'
    let color3 = '#'
    let color4 = '#'
    let color5 = '#'
    color += Math.random().toString(16).slice(2,8)
    color2 += Math.random().toString(16).slice(2,8)
    color3 += Math.random().toString(16).slice(2,8)
    color4 += Math.random().toString(16).slice(2,8)
    color5 += Math.random().toString(16).slice(2,8)
    $bG.style.background = color;
    $bG2.style.background = color2;
    $bG3.style.background = color3;
    $bG4.style.background = color4;
    $bG5.style.background = color5;
    $hex.innerHTML = color;
    $hex2.innerHTML = color2;
    $hex3.innerHTML = color3;
    $hex4.innerHTML = color4
    $hex5.innerHTML = color5;
})
// ADAPTIVE BUTTON
