function getTime(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const reset = document.querySelector('.reset');
let segundos = 0;
let timer;

function iniciaTimer() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTime(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function (e) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    console.log(iniciaTimer())
})

pausar.addEventListener('click', function (e) {
    relogio.classList.add('pausado')
    clearInterval(timer);
})

reset.addEventListener('click', function (e) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})