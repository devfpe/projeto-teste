function consoleClicked() {
    console.log('O botão foi clicado!');
}

function iLoveJS() {
    alert('Eu amo JavaScript!');
}

function nomeCidade() {
    let cidade = prompt('Digite uma cidade: ');
    alert(`Estive em ${cidade} e me lembrei de voce!`);
}

function somaDoisN() {
    let n1 = parseInt(prompt('Digite um numero: '));
    let n2 = parseInt(prompt('Digite outro numero: '));
    let soma = n1 + n2;
    alert(`A soma de ${n1} e ${n2} é = ` + soma);
}

function doubleNumber() {
    let dn = parseInt(prompt('Digite um numero para duplicar: ')); 
    let duplicate = dn * 2;
    alert(`O numero ${dn} x 2 é = ${duplicate}`);
}