    // Menu 
const writeBtn = document.querySelector("button")
const readBtn = document.querySelector('button:nth-of-type(2)')
const main = document.querySelector('main')

writeBtn.addEventListener('click', () => {
    main.classList.add('write')
    main.classList.remove('read')
})

readBtn.addEventListener('click', () => {
    main.classList.add('read')
    main.classList.remove('write')
})

    // Write part

const inpW = document.querySelector('div.write input')
const btnW = document.querySelector('div.write button')
const imgW = document.querySelector('div.write img')
const formW = document.querySelector('div.write')


const writeF = (e) => {

    function url() { return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}` }

    function imgShow() {
        formW.classList.remove('not-active')
        imgW.src = url()
    }

    // API used from: goqr.me

    // removing "&" to avoid bug 
    data = inpW.value.replace(/&/g, '')
    if (data != '') { formW.classList.remove("not-valid") }
    if (data == '') { formW.classList.add("not-valid")}

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

    // Read part

const inpR = document.querySelector('.read input')
const divR = document.querySelector('.read div')
const btnR = document.querySelector('.read button')
const imgR = document.querySelector('.read img')
const read = document.querySelector('.read')
const textR = document.querySelector('.read p')

const chargeFile = (e) => {
    console.log(e.target.files[0])
    file = e.target.files[0]
    if (!file) return
    
    imgR.src = URL.createObjectURL(file)
        
    divR.classList.remove('not-active')
}

divR.addEventListener('click', () => inpR.click() )

inpR.addEventListener('change', chargeFile)

// to change

function fetchRequest(file, formData) {
    textR.innerText = "Scanning QR Code..."
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data
        textR.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code"
        if(!result) return
        textR.innerText = result
        imgR.src = URL.createObjectURL(file);
    }).catch(() => {
        textR.innerText = "Couldn't scan QR Code"
    })
}

inpR.addEventListener("change", async e => {
    let file = e.target.files[0]
    if(!file) return
    let formData = new FormData()
    formData.append('file', file)
    fetchRequest(file, formData)
})

copyBtn.addEventListener("click", () => {
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
})