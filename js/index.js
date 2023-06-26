const preResult = document.querySelector('#pre-operations');
const nowOperation = document.querySelector('#show-operations');
const btnOperations = document.querySelectorAll('#buttons-container button');


class Calculator {
    constructor(preResult, nowOperation) {
        this.preResult = preResult;//Valor anterior mostrado na aba de cima do input
        this.nowOperation = nowOperation;//Valor atual da operação
        this.currentOperation = ''//Valor armazenado que o usuario esta digitando agora
    }
}

btnOperations.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const valor = e.target.innerText;

        if(+valor >= 0 || valor === '.'){
            console.log(valor)
        }else{
            console.log('Op: ' + valor)
        }
    })
}) 