function calculaPontuacao() {
	var campoTime = document.getElementById("time");
	var campoVitorias = document.getElementById("vitorias");
	var campoEmpates = document.getElementById("empates");

	var time = campoTime.value;
	var vitorias = parseInt(campoVitorias.value);
	var empates = parseInt(campoEmpates.value);

	//No Brasileirão, cada vitória é conquistado 3 pontos
	//E cada empate é conquistado 1 ponto
	var pontuacao = vitorias * 3 + empates;

	//No Brasileirão tem-se 38 partidas no total
	var derrotas = ((vitorias + empates) - 38) * -1;

	exibeRespostas(time, vitorias, empates, derrotas, pontuacao);
}

function exibeRespostas(time, vitorias, empates, derrotas, pontuacao) {
	var respostaTime = document.getElementById("resposta-time");
	var respostaVitorias = document.getElementById("resposta-vitorias");
	var respostaEmpates = document.getElementById("resposta-empates");
	var respostaDerrotas = document.getElementById("resposta-derrotas");
	var respostaPontuacao = document.getElementById("resposta-pontuacao");

	respostaTime.textContent = time;
	respostaVitorias.textContent = vitorias;
	respostaEmpates.textContent = empates;
	respostaDerrotas.textContent = derrotas;
	respostaPontuacao.textContent = pontuacao;
}

var botao = document.querySelector("button");
botao.addEventListener("click", calculaPontuacao);