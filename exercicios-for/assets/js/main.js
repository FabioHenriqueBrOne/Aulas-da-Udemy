const elementos = [
    {tag: 'p', texto: 'Parágrafo de teste'},
    {tag: 'section', texto: 'Section teste'},
    {tag: 'div', texto: 'Div teste'},
    {tag: 'footer', texto: 'Footer teste'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos [i];
    let elementosCriados = document.createElement(tag);
    //elementosCriados.innerText = texto;
    //criando nó de texto
    let textoCriado = document.createTextNode(texto);

    elementosCriados.appendChild(textoCriado);
    //criando nó de texto
    div.appendChild(elementosCriados);
}

container.appendChild(div);