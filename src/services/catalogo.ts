import { Pelicula } from "../models/peliculas.js";

export class Catalogo {
    private peliculas: Pelicula[] = [];

    agregar(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    // Sobrecarga - distintas formas de buscar
    buscar(titulo: string): Pelicula | undefined;
    buscar(anio: number): Pelicula | undefined;
    buscar(valor: string | number): Pelicula | undefined {
        if (typeof valor === "string") {
            return this.peliculas.find(p => p.titulo === valor);
        } else {
            return this.peliculas.find(p => p.anio === valor);
        }
    }

    listarTodas(): string {
        return this.peliculas.map(p => p.titulo).join("\n");
    }
}
