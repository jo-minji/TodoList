import React from "react";
import styled from "styled-components";

function TodoTemplate({children}){
    const TodoTemplateBlock = styled.div`
                                        margin:0 auto;
                                        margin-top:90px;
                                        border-radius:16px;
                                        width:512px;
                                        height:768px;
                                        background-color:#fff;
                                        box-shadow : 0 0 8px 0 rgba(0,0,0,0.1);
                                        display:flex;
                                        flex-direction:column;
                                        position:relative

                                        `
    return(
        <div>
            <TodoTemplateBlock>{children}</TodoTemplateBlock>
        </div>
    )
}

export default TodoTemplate
