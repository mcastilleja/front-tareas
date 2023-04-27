import axios from 'axios'

const API_URL = 'https://lazy-pink-newt-shoe.cyclic.app/api/tareas/'

// Crear una nueva tarea
const createTarea = async ( tareaData, token ) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, tareaData, config)
    return response.data
}

// Obtener las tareas del usuario logeado
const getTareas = async ( token ) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// Borrar tareas
const borrarTareas = async ( id, token ) => {
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL +id, config)
    return response.data
}

const tareaService = {
    createTarea,
    getTareas,
    borrarTareas
}

export default tareaService