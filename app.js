alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 5;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log("O Número secreto é esse: " + numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto, o loop continua
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}.`);
        } else {
            alert(`O número secreto é maior que o ${chute}.`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

if(tentativas > 1){
    alert(`Parabéns, você acertou! O Número Secreto é o ${numeroSecreto} com ${tentativas} tentativas.`);  
} else {
    alert(`Parabéns, você acertou! O Número Secreto é o ${numeroSecreto} com ${tentativas} tentativa.`);  
}


