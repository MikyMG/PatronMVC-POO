import { Estudiante } from "./Estudiante.js";

export class ModeloEstudiante {
  private estudiantes: Estudiante[] = [];

  agregar(estudiante: Estudiante): boolean {
    // Verificar si ya existe un estudiante con el mismo ID
    if (this.buscarPorId(estudiante.id)) {
      return false;
    }
    this.estudiantes.push(estudiante);
    return true;
  }

  obtenerTodos(): Estudiante[] {
    return [...this.estudiantes];
  }

  buscarPorId(id: number): Estudiante | undefined {
    return this.estudiantes.find(est => est.id === id);
  }

  eliminarPorId(id: number): boolean {
    const initialLength = this.estudiantes.length;
    this.estudiantes = this.estudiantes.filter(est => est.id !== id);
    return this.estudiantes.length < initialLength;
  }
}