import './button.css';
export const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.text === "DELETE" ? "btn-delete": "btn-add"}>
            {props.text}
        </button>
    )
}