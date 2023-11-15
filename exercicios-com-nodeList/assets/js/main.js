const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgrounColorBody = estilosBody.backgroundColor;


for (let p of ps) {
    p.style.backgroundColor = backgrounColorBody;
    p.style.color = '#FFFFFF';
}