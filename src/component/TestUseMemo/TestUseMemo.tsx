import {useMemo, useState} from "react";
import styles from "./TestUseMemo.module.scss";

export  default function TestUseMemo() {
    const [todo, setTodo] = useState(["Learn React", "Learn TypeScript", "Learn Redux"]);
    const [filter, setFilter] = useState("");
    const [inputTodo, setInputTodo] = useState("");

    const filteredTodos = useMemo(() => {
        return todo.filter((todo) => {
            return todo.includes(filter);
        });
    }, [filter, todo]);

    return (
        <div>
            <input value={filter} onChange={(e) => setFilter(e.target.value)} />
            <div className={styles.flex_row_start}>
                <div>i m input todo</div>
                <input value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}/>
                <button onClick={() => {
                    setTodo([...todo, inputTodo]);
                    setInputTodo("");
                }}>Add</button>
            </div>
            <ul>
                {filteredTodos.map((todo) => <li key={todo}>{todo}</li>)}
            </ul>
        </div>
    )
}