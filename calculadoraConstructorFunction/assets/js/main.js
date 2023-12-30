function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClique()
        this.pressionaEnter();
        this.foca();
    };

    this.foca = () => this.display.focus();

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e =>{
            if(e.key !== 'Enter') return; 
                this.realizaConta();
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida')
            return;
        }
    };

    this.capturaClique = () => {
        document.addEventListener('click', (e) =>{
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
            this.foca();
        });
    };

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

}

const calculadora = new Calculadora();
calculadora.inicia();