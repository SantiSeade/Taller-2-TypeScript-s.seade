import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;

mostrarSeriesEnTabla(series);

calcularPromedioSeasons(series);

function mostrarSeriesEnTabla(sers: Serie[]): void{
    sers.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.style.backgroundColor = "lightgresy";
        trElement.innerHTML = `<td><b>${c.numero}</b></td>
                           <td><a href="${c.link}">${c.name}</a></td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function calcularPromedioSeasons(sers: Serie[]): void{
    let numSeries = 0;
    let totalSeries = 0;
    sers.forEach(c => {
        numSeries = numSeries + 1;
        totalSeries = totalSeries + c.seasons;
    })
    let promedioSeasons = totalSeries/numSeries;
    let trElement = document.createElement("tr")
    trElement.innerHTML = `<td colspan="4">Seasons average: ${promedioSeasons}</td>`;    
    seriesTbody.appendChild(trElement);
}