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

    // API used from: goqr.me
    data = inpW.value.replace(/&/g, '')
    if (data != '')     { formW.classList.remove("not-valid") }
    if (data == '')     { formW.classList.add("not-valid")}
    if (data != false) 
    if (data == false) 

    console.log(data)
    function url() { return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}` }

    function imgShow() {
        formW.classList.remove('not-active')
        imgW.src = url()
        console.log(url())
    }

    if (e.target.nodeName == 'BUTTON' && data != false){
        imgShow()
    }

    if (e.key == "Enter" && data != false){
        imgShow()
    }
}

inpW.addEventListener('keydown', writeF)
inpW.addEventListener('input', writeF)
btnW.addEventListener('click', writeF)
