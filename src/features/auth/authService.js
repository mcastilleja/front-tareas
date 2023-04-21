import axios from 'axios'

const API_URL = 'https://lazy-pink-newt-shoe.cyclic.app/api/user/'

// Registrar un usuario
const register = async (userData) => {

    const response = await axios.post(API_URL, userData)
    return response.data
    
}

// Login para usuario
const login = async (userData) => {

    const response = await axios.post(`${API_URL}login`, userData)

    if( response.data ) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
    
}

// Logout
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService