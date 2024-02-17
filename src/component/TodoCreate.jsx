import React,{useState} from "react";
import styled,{css} from "styled-components";
import{MdAdd} from 'react-icons/md'

import {useTodoDispatch, useTodoNextId} from '../todoContext';

const InsertFormPositioner = styled.div`
                                    width:100%;
                                    position:absolute;
                                    left:0; bottom:0;
                                    `

const Insertform = styled.form`
                            background-color:#f8f9fa;
                            padding:32px 32px 72px;
                            border-bottom-left-radius:16px;
                            border-bottom-right-radius:16px;
                            border-top:1px solid #e9ecef;
                            `

const Input = styled.input`
                    padding:12px;
                    border-radius:4px;
                    border: 1px solid #dee2e6;
                    width:100%;
                    font-size:18px;
                    box-sizing:border-box
                        `                                   
const CircleButton = styled.button`
                                width:80px; height:80px;
                                display:flex;
                                position:absolute;
                                //왼쪽 모서리를 기준으로 50%떨어진 곳이라서 요소 전체를 가운데 정렬을 위해서는 속성이 필요함
                                left:50%; bottom:0px;
                                //모서리가 왼쪽으로 -50%, 밑으로 50%내려감
                                transform:translate(-50%,50%);
                                justify-content:center;
                                align-items:center;
                                z-index:5;
                                color:#fff;
                                background-color:red;
                                font-size:60px;
                                border-radius:50%;
                                border:none;
                                outline:none;
                                cursor:pointer;

                                &:hover{
                                    background:blue;
                                };

                                &:active{
                                    background:skyblue;
                                };

                                //애니메이션 주는 방법
                                transition : 0.125s all ease-in;
                                ${props=>props.open && 
                                                    css`background:#ff6b6b;
                                                    //회전의 중심이 아까 설정해둔 (모서리를) 중간으로 두고 싶어서 설정한 것 
                                                    transform:translate(-50%,50%) rotate(45deg);
                                                    `}


                                `


function TodoCreate(){
    const [open,setOpen] = useState(false);
    const [value,setValue] = useState('');

    const onToggle = ()=>{
        setOpen(!open)
    }


    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onchange = (e)=>{setValue(e.target.value)};

    const onSubmit = (e)=>{
        e.preventDefault(); 
        dispatch({
            type : 'CREATE',
            todo :{
                id : nextId.current,
                text :value,
                done: false
            }
        });
        setValue(''); 
        setOpen(false);
        nextId.current=+1;
    };


    return(        
        <div>
            {open &&(
                <InsertFormPositioner>
                    <Insertform onSubmit={onSubmit} >
                        <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요" value={value} onChange={onchange}/>
                    </Insertform>
                </InsertFormPositioner>
            )}

            <CircleButton onClick={onToggle} open={open} >
                <MdAdd/>
            </CircleButton>
        </div>
    )
}

export default TodoCreate;
