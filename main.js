const resultado = document.querySelector('#resultado');
const botoes = document.querySelectorAll('button');
let resultadoAtual = '';
let sinal = '+';

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const valorBotao = botao.innerText;

    if (valorBotao === 'C') {
      resultadoAtual = '';
      resultado.value = '';
      sinal = '+';
    } else if (valorBotao === 'CE') {
      resultadoAtual = resultadoAtual.slice(0, -1);
      resultado.value = resultadoAtual;
    } else if (valorBotao === '=') {
      const valores = resultadoAtual.split(sinal);
      let soma = 0;
      if (sinal === '+') {
        soma = valores.reduce((total, valor) => total + parseFloat(valor), 0);
      } else if (sinal === '-') {
        soma = valores.reduce((total, valor) => total - parseFloat(valor), parseFloat(valores.shift()));
      } else if (sinal === 'x') {
        soma = valores.reduce((total, valor) => total * parseFloat(valor), 1);
      } else if (sinal === '/') {
        soma = valores.reduce((total, valor) => total / parseFloat(valor), parseFloat(valores.shift()));
      }
      resultado.value = soma;
      resultadoAtual = soma.toString();
      sinal = '+';
    } else if (valorBotao === '+' || valorBotao === '-' || valorBotao === 'x' || valorBotao === '/') {
      sinal = valorBotao;
      resultadoAtual += valorBotao;
      resultado.value = resultadoAtual;
    } else {
      resultadoAtual += valorBotao;
      resultado.value = resultadoAtual;
    }
  });
});
