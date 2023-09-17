import "./input.css";
export const Input = (props) => {
    return (
        <input placeholder="Add a new task" value={props.value} onChange={props.onChange} />
    )
}