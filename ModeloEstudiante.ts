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
    // Retornar una copia del arreglo para evitar modificaciones externas
    return [...this.estudiantes];
  }

  buscarPorId(id: number): Estudiante | undefined {
    // Buscar un estudiante por su ID
    return this.estudiantes.find(est => est.id === id);
  }

  eliminarPorId(id: number): boolean {
    // Eliminar un estudiante por su ID
    const initialLength = this.estudiantes.length;
    this.estudiantes = this.estudiantes.filter(est => est.id !== id);
    return this.estudiantes.length < initialLength;
  }
}