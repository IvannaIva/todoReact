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
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.todo.id
            );
        },

        editTodo(state, action) {
            const { id, newTitle } = action.payload.todo;
            state.todos = state.todos.map((todo) =>
                todo.id !== id ? todo : {...todo, title: newTitle }
            );
        },

        // addLabelToTodo: (state, action) => {
        //     const { id, label } = action.payload.todo;
        //     state.todos = state.todos.map((todo) => {
        //         if (todo.id === id) {
        //             const updatedLabels = todo.labels.includes(label) ?
        //                 todo.labels.filter((l) => l !== label) : [...todo.labels, label];
        //             return {...todo, labels: updatedLabels };
        //         }
        //         return todo;
        //     });

        //     // Замість прямої зміни state.todos, краще повернути новий об'єкт стану:
        //     return state;
        // },
        addLabelToTodo: (state, action) => {
            const { id, label } = action.payload.todo;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    const labelIndex = todo.labels.indexOf(label);
                    if (labelIndex !== -1) {
                        const updatedLabels = [...todo.labels];
                        updatedLabels.splice(labelIndex, 1);
                        return {...todo, labels: updatedLabels };
                    } else {
                        return {...todo, labels: [...todo.labels, label] };
                    }
                }
                return todo;
            });
            return state;
        },

        removeLabelFromTodo(state, action) {
            const { id, label } = action.payload.todo;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        labels: todo.labels.filter((l) => l !== label),
                    };
                }
                return todo;
            });
        },
    },
});

export const {
    addTodo,
    removeTodo,
    editTodo,
    addLabelToTodo,
    removeLabelFromTodo,
} = todoSlice.actions;

export default todoSlice.reducer;