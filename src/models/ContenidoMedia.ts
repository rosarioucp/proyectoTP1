import { IReproducible, ICalificable } from "../interfaces/IContenido";

export abstract class ContenidoMedia implements IReproducible, ICalificable {
    id: number;
    titulo: string;
    anio: number;
    genero: string;
    calificaciones: number[] = [];
constructor(id: number, titulo: string, anio: number, genero: string) {
    this.id = id;
    this.titulo = titulo;
    this.anio = anio;
    this.genero = genero;
}

reproducir(): string {
    return `Reproduciendo: ${this.titulo}`;

}
pausar(): string {
    return `Pausado: ${this.titulo}`;
}
obtenerPuntaje(): number {
    if (this.calificaciones.length === 0) return 0;
    const suma = this.calificaciones.reduce((a, b) => a + b, 0);
    return suma / this.calificaciones.length;   
}
}
