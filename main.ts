import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;

mostrarSeriesEnTabla(series);

calcularPromedioSeasons(series);

document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if(target.matches('p.clickable')) {
      const seriesName = target.textContent;
      const serieSeleccionada = series.filter(c => c.name === seriesName)[0];
      
      if(serieSeleccionada) {
        mostrarDetalleSerie(serieSeleccionada);
      }
    }
  });
  

function mostrarSeriesEnTabla(sers: Serie[]): void {
    sers.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.style.backgroundColor = "lightgrey";
        trElement.innerHTML = `
            <td><b>${c.numero}</b></td>
            <td><p class="clickable" style="color: blue; cursor: pointer;">${c.name}</p></td>
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

function mostrarDetalleSerie(serie: Serie): void{
    const cardBody = document.getElementById('card-body');
    const card = document.getElementById('card')
    if(cardBody) {
        cardBody.innerHTML = `
            <img src="${serie.imagen}" class="img-fluid" alt="${serie.imagen}">
            <div>
                <h5>${serie.name}</h5>
                <p>${serie.descripcion}</p>
                <a href="${serie.link}">${serie.link}</a>
            </div>
        `;
    }
  }