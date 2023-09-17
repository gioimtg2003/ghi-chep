import "./input.css";
export const Input = (props) => {
    return (
        <input placeholder="Add a new task" value={props.value} onChange={props.onChange} onKeyUp={
            (event) => {
                if (event.keyCode === 13) {
                    props.onKeyUp();
                }
            }
        }/>
    )
}