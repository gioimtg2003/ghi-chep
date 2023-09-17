import { legacy_createStore as createStore } from 'redux';

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.todo];
        case 'DELETE':
            return state.filter((item, index) => index !== action.id);
        default:
            return state;
    }
};

const store = createStore(toDoReducer);
store.subscribe(() => {
    localStorage.setItem('todos', JSON.stringify(store.getState()));
});
export { store };
