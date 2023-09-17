import { Button } from "../Button/Button";
import './List.css'
export const List = (props) => {
    return (
        <div className="container-list" style={{width:'40%'}} >
            <ul style={{width:'80%'}}>
                {props.todos.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item}</span>
                            <Button text="DELETE" onClick={() => props.onDelete(index)} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}