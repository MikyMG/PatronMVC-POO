import { Estudiante } from "./Estudiante.js";
import { ModeloEstudiante } from "./ModeloEstudiante.js";
import { VistaEstudiante } from "./VistaEstudiante.js";

export class ControladorEstudiante {
  constructor(
    private modelo: ModeloEstudiante,
    private vista: VistaEstudiante
  ) {}

  registrarEstudiante(id: number, nombre: string, apellido: string, correo: string): void {
    const nuevoEstudiante = new Estudiante(id, nombre, apellido, correo);
    const agregado = this.modelo.agregar(nuevoEstudiante);
    if (agregado) {
      this.vista.mostrarMensaje(`Estudiante ${nombre} registrado correctamente.`);
    } else {
      this.vista.mostrarError(`Ya existe un estudiante con ID ${id}. No se registró.`);
    }
  }

  mostrarEstudiantes(): void {
    const lista = this.modelo.obtenerTodos();
    this.vista.mostrarLista(lista);
  }

  buscarEstudiante(id: number): void {
    const estudiante = this.modelo.buscarPorId(id);
    if (estudiante) {
      this.vista.mostrarEstudiante(estudiante);
    } else {
      this.vista.mostrarError(`No se encontró ningún estudiante con ID ${id}.`);
    }
  }

  eliminarEstudiante(id: number): void {
    const eliminado = this.modelo.eliminarPorId(id);
    if (eliminado) {
      this.vista.mostrarMensaje(`Estudiante con ID ${id} eliminado correctamente.`);
    } else {
      this.vista.mostrarError(`No se encontró ningún estudiante con ID ${id}.`);
    }
  }
}