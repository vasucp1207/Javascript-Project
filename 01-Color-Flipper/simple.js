const colors = ['aqua', 'red', 'lightblue', 'coral', 'lightgreen']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomNum = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
})
