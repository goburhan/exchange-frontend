import styled from "styled-components"

export const Box = styled.div`
display:flex;
justify-content:center;
`
export const Removal = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {
  display:none;
}
@media (max-width: 1600px) {
  display:none;
}


@media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-left:${(props) => props.ml};
    margin-top:${(props) => props.top};
    margin-right:${(props) => props.right};
    margin-bottom:${(props) => props.bottom};

}

`;
