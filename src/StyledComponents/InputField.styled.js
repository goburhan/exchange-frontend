import styled from "styled-components"
import errorSVG from './icon-error.svg'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 85%; 
`


export const Error = styled.span`
    text-align: right;
    color: #FF7979;
    font-size: 13px;
    font-style: italic;
    display: none;
`


export const Input = styled.input`
    width: 94%;
    height: 56px;
    padding: 5px 10px; 
    font-weight: 300;
    font-size: 14.7px;
    line-height: 120%
    color: #777E90;
    border: 1px solid #B1B5C4;  
    border-radius: 18px;

    &:invalid ~ ${Error} {
        display: ${props => props.focused && 'block'};
    }

    &:invalid {
        border: ${props => props.focused && '2px red solid'};
        background: ${props => props.focused && `url(${errorSVG}) no-repeat`};
        background-position: bottom 15px right 20px;
    }

    &:valid {
        border: 2px #38CC8B solid;
    }

    &:focus {
        outline: 2px solid transparent;
    }
`