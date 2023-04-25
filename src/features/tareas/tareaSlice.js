import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import tareaService  from './tareaService'

const initialState = {
    tarea : [],
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ''
}

// Crear una nueva tarea
export const createTarea = createAsyncThunk('tareas/create', async(tareaData, thunkAPI) => {
    try {

        const token = thunkAPI.getState().auth.user.token

        return await tareaService.createTarea(tareaData, token)

    } catch (error) {

        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)

    }
})

export const tareaSlice = createSlice({
    name : 'tarea',
    initialState,
    reducers : {
        reset : (state) => initialState
    },
    extraReducers : (builder) => {
        builder
        .addCase(createTarea.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createTarea.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.tarea.push(action.payload)
        })
        .addCase(createTarea.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = tareaSlice.actions
export default tareaSlice.reducer