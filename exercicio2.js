// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
  
let id = 0;

let imagem = document.querySelector('#slide')
let proximo = document.querySelector('#proximo');
let anterior = document.querySelector('#anterior');

proximo.addEventListener('click', (e) => {
	id = (id + 1) % 5
  	imagem.src = servidorDasImagens + todasAsImagens[id]
});

anterior.addEventListener('click', (e) => {
	// anterior seria:  (id - 1) %  5, porém não há suporte para módulo negativo. 
	// Neste caso, (id - 1 + 5) % 5 = (id + 4) % 5  soluciona o problema.
  	id = (id + 4) % 5
  	imagem.src = servidorDasImagens + todasAsImagens[id]
})
