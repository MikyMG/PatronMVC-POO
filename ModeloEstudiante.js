export class ModeloEstudiante {
    constructor() {
        this.estudiantes = [];
    }
    agregar(estudiante) {
        // Verificar si ya existe un estudiante con el mismo ID
        if (this.buscarPorId(estudiante.id)) {
            return false;
        }
        this.estudiantes.push(estudiante);
        return true;
    }
    obtenerTodos() {
        return [...this.estudiantes];
    }
    buscarPorId(id) {
        return this.estudiantes.find(est => est.id === id);
    }
    eliminarPorId(id) {
        const initialLength = this.estudiantes.length;
        this.estudiantes = this.estudiantes.filter(est => est.id !== id);
        return this.estudiantes.length < initialLength;
    }
}
