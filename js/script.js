//Indicar o link ativo no menu do header
//
const links = document.querySelectorAll(".header li a");

function ativarLink(link) {
  //pegar informação de url dentro do objeto window location
  const url = location.href;
  //pegar informação do href dentro de cada link
  const href = link.href;
  //verificar se a string url contem a string href usando metodo includes e incluir a classe ativo
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar itens do orçamento
//
const parametros = new URLSearchParams(location.search);
console.log(parametros);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

//Perguntas frequentes ocultas
//
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  //selecionar o botão clicado
  const pergunta = event.currentTarget;
  //capturar o valor do atributo aria-controls
  const controls = pergunta.getAttribute("aria-controls");
  //selecionar a resposta associada a pergunta através do id e aria-controls
  const resposta = document.getElementById(controls);
  //mudar a class da resposta
  resposta.classList.toggle("ativa");
  //selecionar a resposta que tem a classe ativa, retorna um booleano
  const ativa = resposta.classList.contains("ativa");
  //modifica o atributo aria-expanded do botao para true ou false. Preocupaçao com acessibilidade
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

//Galeria de bicicletas
//
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

function trocarImagem(event) {
  //selecionar a img clicada
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  //colocar a imagem clicada como primeira do container através do metodo prepend de acordo com o media query selecionado no matchMedia
  if (media) {
    galeriaContainer.prepend(img);
  }
}

galeria.forEach(eventosGaleria);

//Animação
//
if (window.SimpleAnime) {
  new SimpleAnime();
}
