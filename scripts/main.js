//const coisa = document.getElementbyId()
const i_city = document.getElementById("i_city")
const p_cidade = document.getElementById("cidade")
const p_clima = document.getElementById("clima")
const p_umidade = document.getElementById("umidade")
const btn_find = document.getElementById("btn_find")
const p_ceu = document.getElementById("ceu")
const img_ceu = document.getElementById("ceu_img")

//Chave para acessar a API
const key = `f929daa369689e4adad381db8c5b583c`

btn_find.addEventListener("click", async()=>{
    const cidade = i_city.value //Pegar o valor do input para pesquisar a cidade
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
    .then(res=>res.json())
    .then(data=>{
        if(data.name == undefined){
            p_cidade.innerText = "Cidade nao encontrada"
            return
        }
        p_cidade.innerText = `Clima em ${data.name}`//Nome da cidade
        p_clima.innerText = `${Math.floor(data.main.temp)}°c` //Temperatura
        p_umidade.innerText = `Umidade: ${data.main.humidity}%` //Umidade
        p_ceu.innerText = (data.weather[0].description)
        img_ceu.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        console.log(data)
    })
    .catch(error=>{
        p_cidade.innerText("Nao foi possivel achar a cidade")
    })
})