import { ModeloEstudiante } from "./ModeloEstudiante.js";
import { VistaEstudiante } from "./VistaEstudiante.js";
import { ControladorEstudiante } from "./ControladorEstudiante.js";

console.log("▸ ▸ ▸ Sistema de Estudiantes ◂ ◂ ◂");

const modelo = new ModeloEstudiante();
const vista = new VistaEstudiante();
const controlador = new ControladorEstudiante(modelo, vista);

console.log("- - - Registrando estudiantes - - -");
controlador.registrarEstudiante(1, "Marly Sinay", "Moreira García", "mogamasi16@gmail.com");
controlador.registrarEstudiante(2, "Jostin Dionicio", "García Ordoñez", "jostin17@gmail.com");
controlador.registrarEstudiante(3, "Karen Yelena", "Anchundia Pillasagua", "karenanchundia14@gmail.com");
controlador.registrarEstudiante(2, "Carlos Jhoelvis", "Freire García", "carlosfg02@gmail.com"); // Intento duplicado

console.log("Mostrando lista de estudiantes:");
controlador.mostrarEstudiantes();

console.log("Buscando estudiante con ID 2:");
controlador.buscarEstudiante(2);

console.log("Buscando estudiante con ID 5:");
controlador.buscarEstudiante(5);

console.log("Eliminando estudiante con ID 2:");
controlador.eliminarEstudiante(2);

console.log("Mostrando lista actualizada de estudiantes:");
controlador.mostrarEstudiantes();

console.log("Buscando estudiante eliminado (ID 2):");
controlador.buscarEstudiante(2);

console.log("Registro de estudiante con ID 2:");
controlador.registrarEstudiante(2, "Carlos Jhoelvis", "Freire García", "carlosfg02@gmail.com");

console.log("Mostrando lista final de estudiantes:");
controlador.mostrarEstudiantes();

console.log("▸ ▸ ▸ Fin de la Simulación ◂ ◂ ◂");