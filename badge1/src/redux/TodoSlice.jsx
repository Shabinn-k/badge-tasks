import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"Todo",
    initialState:{
        item:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.item.push({
                id:Date.now(),
                text:action.payload
            })
        },
        editTodo:(state,action)=>{
            const {id,newTxt}=action.payload
            const todo=state.item.find(list=>list.id === id)
            if(todo){
                todo.text=newTxt
            }
        },
        deleteTodo:(state,action)=>{
            state.item=state.item.filter(lis=>lis.id !==action.payload)
        }
    }
})

export const {addTodo,editTodo,deleteTodo}=TodoSlice.actions
export default TodoSlice.reducer