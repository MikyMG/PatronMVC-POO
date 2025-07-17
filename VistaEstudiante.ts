import { Estudiante } from "./Estudiante.js";

export class VistaEstudiante {
  mostrarEstudiante(estudiante: Estudiante): void {
    // Mostrar los detalles de un estudiante
    console.log("- - Información del Estudiante - -");
    console.log(`ID: ${estudiante.id}`);
    console.log(`Nombre: ${estudiante.nombre} ${estudiante.apellido}`);
    console.log(`Correo: ${estudiante.correo}`);
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
  }

  mostrarLista(estudiantes: Estudiante[]): void {
    // Mostrar la lista de estudiantes
    console.log("- - Lista de Estudiantes - -");
    if (estudiantes.length === 0) {
      console.log("No hay estudiantes registrados.");
    } else {
      estudiantes.forEach(e => {
        console.log(`${e.id} - ${e.nombre} ${e.apellido} - ${e.correo}`);
      });
    }
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
  }

  mostrarMensaje(mensaje: string): void {
    // Mostrar un mensaje informativo
    console.log(mensaje);
  }

  mostrarError(error: string): void {
    // Mostrar un mensaje de error
    console.error("Error:", error);
  }
}