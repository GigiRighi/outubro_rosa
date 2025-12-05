// Criar a lista de imagens
let imagens = [
    'assets/img/laco_rosa.png',
    'assets/img/outubro_rosa.png',
    'assets/img/uniao.png'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}

// Lógica para exibir as imagens a cada 5 segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    // verifique se chegou no fim das imagens ai volta pro começo
    if (indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }
    
}, 5000);



exibirImagem()
 indiceAtualListaImagens++


document.getElementById("contatoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Pega os valores do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const comentario = document.getElementById("comentario").value;

  
  const numeroWhatsApp = "5519991753130"; 

  const mensagem = `Olá! Novo contato via site:%0A
  Nome: ${nome}%0A
  E-mail: ${email}%0A
  Telefone: ${telefone}%0A
  Comentário: ${comentario}`;


  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  
  window.open(url, "_blank");
});

