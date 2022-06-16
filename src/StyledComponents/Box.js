import styled from "styled-components"

export const Box = styled.div`
display:flex;
justify-content:center;
`
export const Removal = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {
  display:none;
}
`;