function start() {
  var buttonCalcular = document.querySelector('#button-calcular');
  buttonCalcular.addEventListener('click', handleCalculos);
}

function handleCalculos() {
  var primeiroNumero = Number(document.querySelector('#primeiro-numero').value);
  var segundoNumero = Number(document.querySelector('#segundo-numero').value);

  var soma = somar(primeiroNumero, segundoNumero);
  var resultSoma = document.querySelector('#result-soma');
  resultSoma.textContent = soma.toFixed(2).replace('.', ',');

  var subtracaoAMenosB = subtracao(primeiroNumero, segundoNumero);
  var resultSubtracao1 = document.querySelector('#result-subtracao1');
  resultSubtracao1.textContent = subtracaoAMenosB.toFixed(2).replace('.', ',');

  var subtracaoBMenosA = subtracao(segundoNumero, primeiroNumero);
  var resultSubtracao2 = document.querySelector('#result-subtracao2');
  resultSubtracao2.textContent = subtracaoBMenosA.toFixed(2).replace('.', ',');

  var multiplicacao = multiplicar(segundoNumero, primeiroNumero);
  var resultMultiplicacao = document.querySelector('#result-multiplicacao');
  resultMultiplicacao.textContent = multiplicacao.toFixed(2).replace('.', ',');

  var divisaoAPorB = dividir(primeiroNumero, segundoNumero);
  var resultDivisao1 = document.querySelector('#result-divisao1');
  resultDivisao1.textContent = divisaoAPorB.toFixed(2).replace('.', ',');

  var divisaoBPorA = dividir(segundoNumero, primeiroNumero);
  var resultDivisao2 = document.querySelector('#result-divisao2');
  resultDivisao2.textContent = divisaoBPorA.toFixed(2).replace('.', ',');

  var potenciaAPorB = potencia(primeiroNumero, segundoNumero);
  var resultPotencia1 = document.querySelector('#result-potencia1');
  resultPotencia1.textContent = potenciaAPorB.toFixed(2).replace('.', ',');

  var potenciaBPorA = potencia(segundoNumero, primeiroNumero);
  var resultPotencia2 = document.querySelector('#result-potencia2');
  resultPotencia2.textContent = potenciaBPorA.toFixed(2).replace('.', ',');

  var raizDeA = raizQuadrada(primeiroNumero);
  var resultRaiz1 = document.querySelector('#result-raiz1');
  resultRaiz1.textContent = raizDeA.toFixed(2).replace('.', ',');

  var raizDeB = raizQuadrada(segundoNumero);
  var resultRaiz2 = document.querySelector('#result-raiz2');
  resultRaiz2.textContent = raizDeB.toFixed(2).replace('.', ',');

  var fatorialDeA = fatorial(primeiroNumero);
  var resultFatorial1 = document.querySelector('#result-fatorial1');
  resultFatorial1.textContent = fatorialDeA.toFixed(2).replace('.', ',');

  var fatorialDeB = fatorial(segundoNumero);
  var resultFatorial2 = document.querySelector('#result-fatorial2');
  resultFatorial2.textContent = fatorialDeB.toFixed(2).replace('.', ',');

  const options = {
    style: 'percent',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
  };
  const formatNumber = new Intl.NumberFormat('pt-BR', options);

  var porcetagemDeAEmB = porcentagem(primeiroNumero, segundoNumero);
  var resultPorcentagem1 = document.querySelector('#result-porcentagem1');
  resultPorcentagem1.textContent = formatNumber.format(porcetagemDeAEmB);

  var porcetagemDeBEmA = porcentagem(segundoNumero, primeiroNumero);
  var resultPorcentagem2 = document.querySelector('#result-porcentagem2');
  resultPorcentagem2.textContent = formatNumber.format(porcetagemDeBEmA);

  var mediaFinal = media(segundoNumero, primeiroNumero);
  var resultMedia = document.querySelector('#result-media');
  resultMedia.textContent = mediaFinal.toFixed(2).replace('.', ',');
}
function somar(numero1, numero2) {
  return numero1 + numero2;
}

function subtracao(numero1, numero2) {
  return numero1 - numero2;
}
function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}
function dividir(numero1, numero2) {
  return numero1 / numero2;
}
function potencia(numero1, numero2) {
  return numero1 ** numero2;
}
function raizQuadrada(numero) {
  return Math.sqrt(numero);
}
function fatorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  for (var i = numero - 1; i >= 1; i--) {
    numero *= i;
  }
  return numero;
}
function porcentagem(numero1, numero2) {
  return numero2 / numero1;
}
function media(numero1, numero2) {
  return (numero1 + numero2) / 2;
}
start();
/**/
