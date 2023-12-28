//const coisa = document.getElementbyId()
const i_city = document.getElementById("i_city")
const p_cidade = document.getElementById("cidade")
const p_clima = document.getElementById("clima")
const p_umidade = document.getElementById("umidade")
const btn_find = document.getElementById("btn_find")

const key = `f929daa369689e4adad381db8c5b583c`

btn_find.addEventListener("click", async()=>{
    const cidade = i_city.value
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
})