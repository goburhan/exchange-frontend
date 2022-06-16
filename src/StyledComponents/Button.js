import styled from "styled-components"

export const StyledButton = styled.button`
border: 1px solid transparent;
border-radius:${(props) => props.radius };
padding: 12px 16px ;
font-size:18px;
font-weight:bold;
background-color:#6ACB11;
color:#fff;
@media (max-width: ${({ theme }) => theme.mobile}) {
}
`