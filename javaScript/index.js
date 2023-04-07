function calculaPontuacao() {
	var campoTime = document.getElementById("time");
	var campoVitorias = document.getElementById("vitorias");
	var campoEmpates = document.getElementById("empates");

	var time = campoTime.value;
	var vitorias = campoVitorias.value;
	var empates = campoEmpates.value;

	console.log(time);
	console.log(vitorias);
	console.log(empates);
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaPontuacao);