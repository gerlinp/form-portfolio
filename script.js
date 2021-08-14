const labels = document.querySelectorAll('.form-control label')
const title = document.querySelector('#title')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})


title.addEventListener('click', () => {
    const select = document.querySelector('.select label')
    if (title.value === '') {
        console.log('empty')
    } else {
        select.classList.add('move')
    }
})



