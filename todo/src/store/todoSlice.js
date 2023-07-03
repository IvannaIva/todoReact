import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: Date.now(),
                //  todo: action.payload.todo,
                title: action.payload.todo.title,
                description: action.payload.todo.description,

                labels: [],
            });
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.todo.id);
        },

        editTodo(state, action) {
            const { id, newTitle } = action.payload.todo;
            state.todos = state.todos.map((todo) =>
                todo.id !== id ? todo : {...todo, title: newTitle }
            );
        },



    },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;