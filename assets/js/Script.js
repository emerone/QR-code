    // Menu 
const write = document.querySelector("button")
const read = document.querySelector('button:nth-of-type(2)')
const main = document.querySelector('main')

write.addEventListener('click', () => {
    main.classList.add('write')
    main.classList.remove('read')
})

read.addEventListener('click', () => {
    main.classList.add('read')
    main.classList.remove('write')
})

    // Write part

const inpW = document.querySelector('div.write input')
const btnW = document.querySelector('div.write button')
const imgW = document.querySelector('div.write img')
const formW = document.querySelector('div.write')

const writeF = (e) => {
    if (e.key == "Enter" || e.target.nodeName == 'BUTTON'){
        formW.classList.remove('not-active')
    }
}

inpW.addEventListener('keydown', writeF)
btnW.addEventListener('click', writeF)