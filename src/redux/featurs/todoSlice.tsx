import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo ={
    title : string,
    description : string,
    isComplete? : boolean
}

type TInitialSate = {
    todos: TTodo[]
}

const initialState : TInitialSate = {
    todos : []
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state , action : PayloadAction<TTodo> ) => {
            state.todos.push({...action.payload, isComplete : false})
        }
    }
})

export const {addTodo} = todoSlice.actions

export default todoSlice.reducer