import axios from 'axios'

const API_URL = 'api/exercises/'

const createExercise = async (exerciseData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, exerciseData, config)

    return response.data
} 

const getExercises = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const deleteExercise = async (exerciseId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.delete(API_URL + exerciseId, config)

    return response.data
}



const exerciseService = {
    createExercise,
    getExercises,
    deleteExercise
}

export default exerciseService