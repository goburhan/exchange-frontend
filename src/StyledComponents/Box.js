import styled from "styled-components"

export const Box = styled.div`
display:flex;
justify-content:center;
`
export const Removal = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {
  display:none;
}
@media (max-width: ${({ theme }) => theme.tablet}) {
  display:none;
}


@media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-left:${(props) => props.ml};
    margin-top:${(props) => props.top};
    margin-right:${(props) => props.right};
    margin-bottom:${(props) => props.bottom};

}

`;
export const Appear = styled.div`
display:none;
@media (max-width: ${({ theme }) => theme.mobile}) {
  display:block;
}
@media (max-width: ${({ theme }) => theme.tablet}) {
  display:none;
}




`;


export const AppearPhoto = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {
  display:inline;
}

@media (max-width: ${({ theme }) => theme.bigscreen}) {
  display:none;

}

`;