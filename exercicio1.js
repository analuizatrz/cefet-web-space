// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML

//1.1
// const elementos = document.querySelectorAll('.botao-expandir-retrair');

// for(let e of elementos){
// 	e.addEventListener('click', function(key){
// 		alert('Cuidado !');
// 	});
// }

//1.2
const botoes = document.querySelectorAll('.botao-expandir-retrair');

for(let botao of botoes){
	botao.addEventListener('click', (event) => {
		let element = event.currentTarget

		if(element.parentNode.classList.toggle('expandido'))
			element.innerHTML = '-'
		else
			element.innerHTML = '+'
	});
}

