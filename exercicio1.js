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
const elementos = document.querySelectorAll('.botao-expandir-retrair');

for(let e of elementos){
	e.addEventListener('click', function(evt){
		let el = evt.currentTarget;
		let expanded = e.parentNode.classList.toggle('expandido');

		if(expanded){
			el.innerHTML = '-';
		}
		else{
			el.innerHTML = '+';
		}

	});
}

