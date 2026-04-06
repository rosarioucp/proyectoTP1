import { describe, test, expect } from '@jest/globals';
import { Catalogo } from "../services/catalogo.js";
import { Pelicula } from "../models/peliculas.js";

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
    expect(catalogo.buscar("Inception")).toBeUndefined();
  });
});