export class Serie {
    numero: number;
    name: string;
    channel: string;
    seasons: number;
    descripcion: string;
    link: string;
    imagen: string;

    constructor(numero: number, name: string, channel: string, seasons: number, descripcion: string, link: string, imagen: string){
        this.numero = numero;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion = descripcion;
        this.link = link;
        this.imagen = imagen;
    }
}