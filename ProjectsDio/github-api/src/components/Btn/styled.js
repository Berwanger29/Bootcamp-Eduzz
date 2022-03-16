import styled from "styled-components"


export const Button = styled.button`
    padding: 5px;
    border-radius: 5px;
    border-style: none;
    ${props => props.pressed ? {boxShadow : '1px 1px 3px 1px gray'}: 0};
    cursor: pointer;
`;