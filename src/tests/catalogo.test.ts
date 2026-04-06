import { describe, test, expect } from '@jest/globals';
import { Catalogo } from "../services/catalogo.js";
import { Pelicula } from "../models/peliculas.js";
import { Usuario } from "../models/usuario.js";

describe("Pruebas del Catálogo de Películas", () => {
  test("Debe agregar una película y encontrarla por título", () => {
    const catalogo = new Catalogo();
    const peli = new Pelicula(1, "Matrix", 1999, "Acción", 136);
    
    catalogo.agregar(peli);
    const resultado = catalogo.buscar("Matrix");

    expect(resultado).toBeDefined();
    expect(resultado?.titulo).toBe("Matrix");
  });

  test("Debe devolver undefined si la película no existe", () => {
    const catalogo = new Catalogo();
    expect(catalogo.buscar("Coco")).toBeUndefined();
  });

  test("Debe encontrar una película por su año de estreno", () => {
    const catalogo = new Catalogo();
    const peli = new Pelicula(2, "Avatar", 2009, "Ciencia ficcion", 162);
    
    catalogo.agregar(peli);
    const resultado = catalogo.buscar(2009);

    expect(resultado).toBeDefined();
    expect(resultado?.titulo).toBe("Avatar");
  });
});

describe("Pruebas de Usuario y Favoritos", () => {
  test("Debe permitir al usuario agregar películas a su lista de favoritos", () => {
    const usuario = new Usuario("Rosario", "rosario@gmail.com");
    const peli = new Pelicula(3, "Diario de una pasion", 2004, "Romance", 124);

    usuario.agregarFavorito(peli);

    const listaFavoritos = usuario.verFavoritos();
    expect(listaFavoritos).toContain("Diario de una pasion");
  });
});