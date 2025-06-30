import { Estudiante } from "./Estudiante.js";

export class VistaEstudiante {
  mostrarEstudiante(estudiante: Estudiante): void {
    console.log("- - Información del Estudiante - -");
    console.log(`ID: ${estudiante.id}`);
    console.log(`Nombre: ${estudiante.nombre} ${estudiante.apellido}`);
    console.log(`Correo: ${estudiante.correo}`);
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n");
  }

  mostrarLista(estudiantes: Estudiante[]): void {
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
    console.log(mensaje);
  }

  mostrarError(error: string): void {
    console.error("Error:", error);
  }
}