import { ContenidoMedia } from "./ContenidoMedia.js";

export class Pelicula extends ContenidoMedia {

    duracion: number;
constructor(id: number, titulo: string, anio: number, genero: string, duracion: number) {
    super(id, titulo, anio, genero);
    this.duracion = duracion;
}
obtenerDuracion(): string {
    return `Duración: ${this.duracion} minutos`;
}
}
