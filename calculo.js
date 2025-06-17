//valores de emissão de CO2 por km para cada meio de transporte 
function calcularResultado() {
let fatorAviao = 0.275;
let fatorCarro = 0.15;
let fatorMoto = 0.09;
let fatorOnibus = 0.05;

// lê os km do localStorage//
let kmAviao = parseFloat(localStorage.getItem("km_aviao"));
let kmCarro = parseFloat(localStorage.getItem("km_carro")) ;
let kmMoto = parseFloat(localStorage.getItem("km_moto"));
let kmOnibus = parseFloat(localStorage.getItem("km_onibus"));

// calcula a quantidade de CO2 emitido por cada meio-
let co2Aviao = kmAviao * fatorAviao;
let co2Carro = kmCarro * fatorCarro;
let co2Moto = kmMoto * fatorMoto;
let co2Onibus = kmOnibus * fatorOnibus;

let totalCO2 = co2Aviao + co2Carro + co2Moto + co2Onibus; //** calculo da quantidade total de co2 emitido

let arvores = Math.ceil(totalCO2 / 21); //*** calculo da quatidade de arvores(cada árvore absorve 21 kg por ano)

//mostrar os resultados
document.getElementById("resumo").innerHTML =
  "<strong><p>Avião: " + kmAviao + " km = " + co2Aviao + " kg de CO₂</p>" +
  "<p>Carro: " + kmCarro + " km = " + co2Carro + " kg de CO₂</p>" +
  "<p>Moto: " + kmMoto + " km = " + co2Moto + " kg de CO₂</p>" +
  "<p>Ônibus: " + kmOnibus + " km = " + co2Onibus + " kg de CO₂</p>" +
  "<h2>Total: " + totalCO2 + " kg de CO₂</h2>" +
  "<h3>Você precisaria plantar <strong>" + arvores + "</strong> árvore(s) por ano para compensar.</h3>";

localStorage.clear();
}




// executa quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
  let pagina = window.location.pathname;

  // Moto
  if (pagina.includes("moto.html")) {
    document.querySelector(".btnSeguir").addEventListener("click", function () {
      var km = parseFloat(document.querySelector(".inputMoto").value);
      if (!isNaN(km) && km > 0) {
        localStorage.setItem("km_moto", km);
        window.location.href = "pergunta2.html";
      } else {
        alert("Digite uma distância válida.");
      }
    });
  }

  // Carro
  if (pagina.includes("carro.html")) {
    document.querySelector(".btnSeguir").addEventListener("click", function () {
      let km = parseFloat(document.querySelector(".inputCarro").value);
      if (!isNaN(km) && km > 0) {
        localStorage.setItem("km_carro", km);
        window.location.href = "pergunta2.html";   
      }
    });
  }

  // ônibus
  if (pagina.includes("onibus.html")) {
    document.querySelector(".btnSeguir").addEventListener("click", function () {
      let km = parseFloat(document.querySelector(".inputOnibus").value);
      if (!isNaN(km) && km > 0) {
        localStorage.setItem("km_onibus", km);
        window.location.href = "pergunta2.html";
      }
    });
  }

  // avião (com 3 faixas de distância)
if (pagina.includes("aviao.html")) {
  let botoes = document.querySelectorAll(".botao-invisivel");

  if (botoes.length >= 3) {
    // até 1000 km, usa 1000 km
    botoes[0].addEventListener("click", function () {
      localStorage.setItem("km_aviao", 1000);
      window.location.href = "pergunta2.html";
    });

    // de 1000 a 3000 km, pode usar 2000 km como média
    botoes[1].addEventListener("click", function () {
      localStorage.setItem("km_aviao", 2000);
      window.location.href = "pergunta2.html";
    });

    // mais de 3000 km, usa 3000 km como estimativa
    botoes[2].addEventListener("click", function () {
      localStorage.setItem("km_aviao", 3000);
      window.location.href = "pergunta2.html";
    });
  }
}
  // resultado
  if (pagina.includes("resultado.html")) {
    calcularResultado();
  }

});
