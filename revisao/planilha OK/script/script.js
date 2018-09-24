const button = document.querySelector(".feedback__button");

button.addEventListener("click", function(event) {
  event.preventDefault();

  const tabela = document.querySelector(".respostas__table"); // pega a tabela do documento
  const nomeEmpresa = document.getElementById("feedbackInputName");
  const inputCidade = document.getElementById("feedbackInputMoney");
  const inputComentario = document.getElementById("feedbackInputDate");
  const linha = document.createElement("tr"); // cria linha

  const colunaEmpresa = document.createElement("td");
  const colunaEmpresaTexto = document.createTextNode(nomeEmpresa.value)
  colunaEmpresa.appendChild(colunaEmpresaTexto);

  const colunaCidade = document.createElement("td");
  const colunaCidadeTexto = document.createTextNode(inputCidade.value)
  colunaCidade.appendChild(colunaCidadeTexto);

  const colunaComentario = document.createElement("td");
  const colunaComentarioTexto = document.createTextNode(inputComentario.value)
  colunaComentario.appendChild(colunaComentarioTexto);

    //inserir colunas na linha
    linha.appendChild(colunaEmpresa);
    linha.appendChild(colunaCidade);
    linha.appendChild(colunaComentario);

    //adiciona linha a tabela
    tabela.appendChild(linha);

})