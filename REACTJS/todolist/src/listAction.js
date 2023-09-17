const ADD = 'ADD';
const DELETE = 'DELETE';
const add = (todo) => {
    return {
        type: ADD,
        todo
    }
};
const deleteTask = (id) => {
    return {
        type: DELETE,
        id
    }
};
const mapStateToProps = (state) => {
    return {
        todos: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (todo) => {
            dispatch(add(todo))
        },
        onDelete: (id) => {
            dispatch(deleteTask(id))
        }
    }
};

export { mapStateToProps, mapDispatchToProps };