import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {useTodoState} from '../todoContext'; 
const TodoListBlock = styled.div`
                                background-color:red;
                                padding:20px 32px;
                                padding-bottom:48px;
                                overflow-y:auto; //세로 방향으로 넘어가면 스크롤이 자동 생성 된다

                                `;

function TodoList(){
    const todos = useTodoState(); 

    return(
        <TodoListBlock>
            {todos.map(todos =>(
                    <TodoItem 
                                key={todos.id}
                                id={todos.id}
                                text={todos.text}
                                done={todos.done}
                            />
                        ))
            }
        </TodoListBlock>
    )
}

export default TodoList;
