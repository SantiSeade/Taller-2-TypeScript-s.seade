import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
mostrarSeriesEnTabla(series);
calcularPromedioSeasons(series);
function mostrarSeriesEnTabla(sers) {
    sers.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.style.backgroundColor = "lightgresy";
        trElement.innerHTML = "<td><b>".concat(c.numero, "</b></td>\n                           <td><a href=\"").concat(c.link, "\">").concat(c.name, "</a></td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
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
