import axios from 'axios'

const API_URL = 'https://lazy-pink-newt-shoe.cyclic.app/api/user/'

const register = async (userData) => {

    const response = await axios.post(API_URL, userData)
    return response.data
    
}

const authService = {
    register
}

export default authService