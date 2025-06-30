import { Estudiante } from "./Estudiante.js";
export class ControladorEstudiante {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    registrarEstudiante(id, nombre, apellido, correo) {
        const nuevoEstudiante = new Estudiante(id, nombre, apellido, correo);
        const agregado = this.modelo.agregar(nuevoEstudiante);
        if (agregado) {
            this.vista.mostrarMensaje(`Estudiante ${nombre} registrado correctamente.`);
        }
        else {
            this.vista.mostrarError(`Ya existe un estudiante con ID ${id}. No se registró.`);
        }
    }
    mostrarEstudiantes() {
        const lista = this.modelo.obtenerTodos();
        this.vista.mostrarLista(lista);
    }
    buscarEstudiante(id) {
        const estudiante = this.modelo.buscarPorId(id);
        if (estudiante) {
            this.vista.mostrarEstudiante(estudiante);
        }
        else {
            this.vista.mostrarError(`No se encontró ningún estudiante con ID ${id}.`);
        }
    }
    eliminarEstudiante(id) {
        const eliminado = this.modelo.eliminarPorId(id);
        if (eliminado) {
            this.vista.mostrarMensaje(`Estudiante con ID ${id} eliminado correctamente.`);
        }
        else {
            this.vista.mostrarError(`No se encontró ningún estudiante con ID ${id}.`);
        }
    }
}
