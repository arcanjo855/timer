




const form = document.querySelector("#formulario");

form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    const inputHoras = document.getElementById("input-horas");
    const inputMinutos = document.getElementById("input-minutos");
    const inputSegundos = document.getElementById("input-segundos");

    let duracao = ((parseInt(inputHoras.value) * 60 * 60) + (parseInt(inputMinutos.value) * 60) + parseInt(inputSegundos.value))


    display = document.getElementById("contagem")
    timer(duracao,display)
    
})




const timer = (duracao,display)=>{

    let timer = duracao
    let horas,minutos,segundos

    let interval = setInterval(()=>{
        horas = Math.floor((timer / 60) / 60)
        minutos = Math.floor(timer / 60 - (horas * 60))
        segundos = Math.floor(timer % 60)

        horas = horas < 10 ? `0` + horas : horas
        minutos = minutos < 10 ? `0` + minutos : minutos
        segundos = segundos < 10 ? `0` + segundos : segundos

        display.innerHTML = `${horas} : ${minutos} : ${segundos}`
        timer -= 1

        if(timer < 0){
            display.innerHTML = 'acabou'
            clearInterval(interval)
        }
    },1000)
}

