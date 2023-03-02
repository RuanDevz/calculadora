// selecione o elemento de resultado da calculadora
const resultado = document.querySelector('#resultado');

// selecione todos os botões da calculadora
const botoes = document.querySelectorAll('button');

// variável para armazenar o resultado atual da calculadora
let resultadoAtual = '';

// loop através de cada botão e adiciona um evento de clique a cada um
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // obtém o valor do botão clicado
    const valorBotao = botao.innerText;

    if (valorBotao === 'C') {
      // se o botão "C" for clicado, apaga todo o resultado
      resultadoAtual = '';
      resultado.value = '';
    } else if (valorBotao === 'CE') {
      // se o botão "CE" for clicado, apaga o último caractere do resultado
      resultadoAtual = resultadoAtual.slice(0, -1);
      resultado.value = resultadoAtual;
    } else if (valorBotao === '=') {
      // se o botão "=" for clicado, realiza o cálculo e exibe o resultado
      resultado.value = eval(resultadoAtual);
    } else {
      // caso contrário, adiciona o valor do botão ao resultado atual
      resultadoAtual += valorBotao;
      resultado.value = resultadoAtual;
    }
  });
});