let searchInput = document.querySelector('input[name="search"]')
let topics = document.querySelectorAll('.search li')

searchInput.addEventListener('input', () => {
    let filter = searchInput.value.toUpperCase()
    Array.from(topics).forEach(element => {
        if (element.innerText.toUpperCase().includes(filter)) {
            element.style.display=''
        }else{
            element.style.display='none'
        }
    })
})