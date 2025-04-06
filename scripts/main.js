import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
mostrarSeriesEnTabla(series);
calcularPromedioSeasons(series);
document.addEventListener('click', function (e) {
    var target = e.target;
    if (target.matches('p.clickable')) {
        var seriesName_1 = target.textContent;
        var serieSeleccionada = series.filter(function (c) { return c.name === seriesName_1; })[0];
        if (serieSeleccionada) {
            mostrarDetalleSerie(serieSeleccionada);
        }
    }
});
function mostrarSeriesEnTabla(sers) {
    sers.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.style.backgroundColor = "lightgrey";
        trElement.innerHTML = "\n            <td><b>".concat(c.numero, "</b></td>\n            <td><p class=\"clickable\" style=\"color: blue; cursor: pointer;\">").concat(c.name, "</p></td>\n            <td>").concat(c.channel, "</td>\n            <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function calcularPromedioSeasons(sers) {
    var numSeries = 0;
    var totalSeries = 0;
    sers.forEach(function (c) {
        numSeries = numSeries + 1;
        totalSeries = totalSeries + c.seasons;
    });
    var promedioSeasons = totalSeries / numSeries;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"4\">Seasons average: ".concat(promedioSeasons, "</td>");
    seriesTbody.appendChild(trElement);
}
function mostrarDetalleSerie(serie) {
    var cardBody = document.getElementById('card-body');
    var card = document.getElementById('card');
    if (cardBody) {
        cardBody.innerHTML = "\n            <img src=\"".concat(serie.imagen, "\" class=\"img-fluid\" alt=\"").concat(serie.imagen, "\">\n            <div>\n                <h5>").concat(serie.name, "</h5>\n                <p>").concat(serie.descripcion, "</p>\n                <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n            </div>\n        ");
    }
}
