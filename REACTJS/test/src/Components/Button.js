export const Increment = (props) => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
};

export const Decrement = (props) => {
    return (
        <div>
            <button onClick={props.decrement}>Decrement</button>
        </div>
    )
};

export const Reset = (props) => {
    return (
        <div>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
};
