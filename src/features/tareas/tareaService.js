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

const tareaService = {
    createTarea
}

export default tareaService