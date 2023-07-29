let number = document.querySelector(".advice-number span")
let text = document.querySelector(".advice-text")
let btn = document.querySelector('button')


function request(){
    const req = new XMLHttpRequest()

    req.open("GET", "https://api.adviceslip.com/advice")
    req.send()
    req.addEventListener('load', () => {
        if(req.status == 200){
            let data = JSON.parse(req.response).slip
            
            number.textContent = data.id
            text.textContent = `"${data.advice}"`
            console.log(data);
        }
    })
}

btn.addEventListener('click', () => {
    request()
})