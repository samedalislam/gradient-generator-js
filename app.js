const gradientShow = document.querySelector('.gradient-show'),
    selectDirection = document.querySelector('select'),
    colorInputs = document.querySelectorAll('.color-input'),
    textarea = document.querySelector('textarea'),
    refreshBtn = document.querySelector('.refresh'),
    copyBtn = document.querySelector('.copy')

const generateGradient = () => {
    const direction = selectDirection.options[selectDirection.selectedIndex].value
    const gradient = `linear-gradient(${direction}, ${colorInputs[0].value}, ${colorInputs[1].value})`

    gradientShow.style.background = gradient
    textarea.innerText = `background: ${gradient}`
}

// Universal function invoking
generateGradient()

// Invoking function for each color pallete's color change
colorInputs.forEach(v => {
    v.addEventListener('input', generateGradient)
})

// Change Gradient View Every direction has changed
selectDirection.addEventListener('change', generateGradient)

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(textarea.value)
})

// Refresh the page
refreshBtn.addEventListener('click', () => window.location.reload())