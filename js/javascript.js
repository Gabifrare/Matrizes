function criarMatriz(nomeMatriz, ordem) {

    var matriz = new Array();
    var resposta = confirm("Você deseja que a matriz " + nomeMatriz + " seja aleatória? (OK = Sim, Cancelar = Não)");

    for (var i = 0; i < ordem; i++) {
        var linha = new Array();
        for (var j = 0; j < ordem; j++) {
            if (resposta) {
                linha.push(Math.ceil(Math.random() * 60));
            } else {
                var valor;
                do {
                    valor = prompt("Digite o valor para a matriz " + nomeMatriz + "[" + i + "][" + j + "]:");
                    linha.push(parseInt(valor));
                } while (isNaN(parseInt(valor)));
            }
        }
        matriz.push(linha);
    }
    return matriz;
}

function exibirMatriz(nomeMatriz, matriz) {
    document.write("<div class='matriz'><h4>" + nomeMatriz + "</h4>");
    document.write("<table>");
    for (var k = 0; k < matriz.length; k++) {
        document.write("<tr>");
        for (var c = 0; c < matriz[k].length; c++) {
            document.write('<td>' + matriz[k][c] + '</td>');
        }
        document.write("</tr>");
    }
    document.write("</table></div>");
}


function somarMatrizes(m1, m2) {
    var matrizResultado = new Array();
    for (var i = 0; i < m1.length; i++) {
        var linha = [];
        for (var j = 0; j < m1[i].length; j++) {
            linha.push(m1[i][j] + m2[i][j]);
        }
        matrizResultado.push(linha);
    }
    return matrizResultado;
}


function subtrairMatrizes(m1, m2) {
    var matrizResultado = new Array();
    for (var i = 0; i < m1.length; i++) {
        var linha = [];
        for (var j = 0; j < m1[i].length; j++) {
            linha.push(m1[i][j] - m2[i][j]);
        }
        matrizResultado.push(linha);
    }
    return matrizResultado;
}

function multiplicarMatrizes(m1, m2) {
    var matrizResultado = [];
    for (var i = 0; i < m1.length; i++) {
        matrizResultado[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            matrizResultado[i][j] = 0;
        }
    }

    for (var i = 0; i < m1.length; i++) {
        for (var j = 0; j < m2[0].length; j++) {
            for (var k = 0; k < m1[0].length; k++) {
                matrizResultado[i][j] += m1[i][k] * m2[k][j];
            }
        }
    }

    return matrizResultado;
}

function iniciarOperacao() {

    var ordem;

    do {
        var resposta = prompt("Você deseja que as matrizes sejam de ordem 2 ou 3?");

        if (resposta == null) {
            alert("Operação cancelada.");
            return;
        }
        ordem = parseInt(resposta);
    } while (ordem !== 2 && ordem !== 3);

    document.open();
    document.write("<!DOCTYPE html><html lang='pt-br'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    document.write("<link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>");
    document.write("<link href='https://fonts.googleapis.com/css2?family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap' rel='stylesheet'>");
    document.write("<link rel='stylesheet' href='css/style.css' type='text/css'><title>Calculadora de Matrizes</title></head><body>");

    document.write("<div class='container'><nav id='menu'><ul>");
    document.write("<li><a href='index.html'>Calculadora</a></li>");
    document.write("</ul></nav></div>");

    var m1 = criarMatriz("1", ordem);
    var m2 = criarMatriz("2", ordem);

    document.write("<div class='agrupar'>");
    exibirMatriz("Matriz 1", m1);
    document.write("<h1>+</h1>");
    exibirMatriz("Matriz 2", m2);

    var resultadoSoma = somarMatrizes(m1, m2);
    document.write("<h1>=</h1>");
    exibirMatriz("Resultado da Soma", resultadoSoma);
    document.write("</div>");

    document.write("<div class='agrupar'>");
    exibirMatriz("Matriz 1", m1);
    document.write("<h1>-</h1>");
    exibirMatriz("Matriz 2", m2);

    var resultadoSubtracao = subtrairMatrizes(m1, m2);
    document.write("<h1>=</h1>");
    exibirMatriz("Resultado da Subtração", resultadoSubtracao);
    document.write("</div>");

    document.write("<div class='agrupar'>");
    exibirMatriz("Matriz 1", m1);
    document.write("<h2>x</h2>");
    exibirMatriz("Matriz 2", m2);

    var resultadoMultiplicacao = multiplicarMatrizes(m1, m2);
    document.write("<h1>=</h1>");
    exibirMatriz("Resultado da Multiplicação", resultadoMultiplicacao);
    document.write("</div>");


    document.write("<button onclick='location.reload()'>Voltar à Calculadora</button>");

    document.write("</div>");
    document.write("</body></html>");
    document.close();
}
