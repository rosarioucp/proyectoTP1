import { Pelicula } from "./models/peliculas.js";
import { Usuario } from "./models/usuario.js";
import { Catalogo } from "./services/catalogo.js";

// 1. Instanciar el catálogo (Crear el objeto que guardará las pelis)
const miCatalogo = new Catalogo();

// 2. Crear las películas (Instancias)
const peli1 = new Pelicula(1, "Cuestion de Tiempo", 2013, "Romance", 123);
const peli2 = new Pelicula(2, "Interstellar", 2014, "Ciencia Ficción", 169);
const peli3 = new Pelicula(3, "El Conjuro 4", 2025, "Terror", 135);

// 3. Agregar las películas al catálogo usando el método 'agregar' que definiste
miCatalogo.agregar(peli1);
miCatalogo.agregar(peli2);
miCatalogo.agregar(peli3);

// 4. Probar la búsqueda por título
const busquedaNombre = miCatalogo.buscar("Cuestion de Tiempo");
console.log("Resultado búsqueda por nombre:", busquedaNombre?.titulo);

// 5. Probar la búsqueda por año
const busquedaAnio = miCatalogo.buscar(2014);
console.log("Resultado búsqueda por año:", busquedaAnio?.titulo);

// 6. Ver todas las películas (usando tu método listarTodas)
console.log("--- LISTADO COMPLETO ---");
console.log(miCatalogo.listarTodas());
