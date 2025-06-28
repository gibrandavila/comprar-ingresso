function comprar() {
  let inputSelecionado = document.getElementById("tipo-ingresso").value;
  if (
    document.getElementById("qtd").value == 0 ||
    isNaN(document.getElementById("qtd").value)
  ) {
    alert("quantidade inválida");
  } else {
    if (
      inputSelecionado == "inferior" &&
      equacaoEmudarNumeroTela("qtd-inferior") >= 0 &&
      recuperarValorPista("qtd-inferior") > 0
    ) {
      alterarValor("qtd-inferior");
    } else if (inputSelecionado == "inferior") {
      quantidadeInvalida("a cadeira inferior");
    }
    if (
      inputSelecionado == "superior" &&
      equacaoEmudarNumeroTela("qtd-superior") >= 0 &&
      recuperarValorPista("qtd-superior") > 0
    ) {
      alterarValor("qtd-superior");
    } else if (inputSelecionado == "superior") {
      quantidadeInvalida("a cadeira superior");
    }
    if (
      inputSelecionado == "pista" &&
      equacaoEmudarNumeroTela("qtd-pista") >= 0 &&
      recuperarValorPista("qtd-pista") > 0
    ) {
      alterarValor("qtd-pista");
    } else if (inputSelecionado == "pista") {
      quantidadeInvalida("a pista");
    }
  }
  resetarCampos();
}
function recuperarValorPista(id) {
  quantidade = Number(document.getElementById(id).innerHTML);
  return quantidade;
}
function equacaoEmudarNumeroTela(id) {
  let quantidadeInserida = Number(document.getElementById("qtd").value);
  let equacaoIngressos = recuperarValorPista(id) - quantidadeInserida;
  return equacaoIngressos;
}
function alterarValor(id) {
  document.getElementById(id).innerHTML = equacaoEmudarNumeroTela(id);
}
function quantidadeInvalida(local) {
  alert(`Para ${local} a quantidade de ingressos disponíveis é insuficiente`);
}
function resetarCampos() {
  inputSelecionado = document.getElementById("qtd");
  inputSelecionado.value = "";
}
//inserir um numero 0 ou um caractere que nao seja um numero
