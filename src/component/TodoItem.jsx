import React from "react";
import styled,{css} from "styled-components";
import {MdDone,MdDelete } from 'react-icons/md';
import {useTodoDispatch} from '../todoContext';





const Remove = styled.div`display:flex;
                        align-items:center;
                        color:#dee2e6;
                        font-size:24px;
                        cursor:pointer;
                        display:none;
                          `

const TodoItemBlock = styled.div`
                                display:flex;
                                align-items:center;
                                padding-top:12px;
                                padding-bottom 12px;

                                &:hover{
                                    ${Remove}{
                                        display:inline
                                    }
                                }`

const CheckCircle = styled.div`
                                width:30px;
                                height:30px;
                                border:1px solid #555;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                border-radius:15px;
                                margin-right:20px;

                                ${props=>props.done && 
                                                    css`border: 1px solid #38d9a9;
                                                        color:#38d9a9`
                                    }
                                `            


const Text = styled.div`
                        font-size:21px;
                        color:#495097;
                        flex:1;
                        ${props => props.done && 
                            css`color:#ced4da`}
                        `

function TodoItem({id,text,done}){
    const dispatch = useTodoDispatch();
    const onToggle = ()=> dispatch({type:'TOGGLE', id});
    const onRemove = ()=> dispatch({type:'REMOVE',id})
    return(
        <TodoItemBlock>

              <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle> 
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}><MdDelete/></Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;
