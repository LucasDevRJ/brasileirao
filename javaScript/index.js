function calculaPontuacao() {
	var campoTime = document.getElementById("time");
	var campoVitorias = document.getElementById("vitorias");
	var campoEmpates = document.getElementById("empates");

	var time = parseInt(campoTime.value);
	var vitorias = parseInt(campoVitorias.value);
	var empates = parseInt(campoEmpates.value);

	//No Brasileirão, cada vitória é conquistado 3 pontos
	//E cada empate é conquistado 1 ponto
	var pontuacao = vitorias * 3 + empates;

	//No Brasileirão tem-se 38 partidas no total
	var derrotas = ((vitorias + empates) - 38) * -1;
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaPontuacao);