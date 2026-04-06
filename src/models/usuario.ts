import { Pelicula } from "./peliculas.js";

export class Usuario {
    nombre: string;
    email: string;
    favoritos: Pelicula[] = [];

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }

    agregarFavorito(pelicula: Pelicula): void {
        this.favoritos.push(pelicula);
    }

    verFavoritos(): string {
        if (this.favoritos.length === 0) return "No tenés favoritos";
        return this.favoritos.map(p => p.titulo).join(", ");
    }
}
