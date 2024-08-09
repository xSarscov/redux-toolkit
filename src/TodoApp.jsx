import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

    // const { data = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId( todoId + 1 )
    }

    const previousTodo = () => {
        if (todoId === 1) return;
        setTodoId( todoId - 1 )
    }

    return (
        <>
        
            <h1>Todos - RTK Query</h1>

            <hr />

            {
                isLoading && (
                    <h4>Loading...</h4>
                )
            }
            
            <pre>{ JSON.stringify( todo, null, " " ) }</pre>

            {/* <ul>
                {
                    !isLoading && (
                        data.map(({ id, title }) => (
                            <li key={id}>{title}</li>
                        ))
                    )
                }
            </ul> */}

            <button onClick={ previousTodo }>
                Previous todo
            </button>
            <button onClick={ nextTodo }>
                Next todo
            </button>

        </>
    )
}
