import React from 'react'
import styled from 'styled-components';
import { Removal } from '../StyledComponents/Box';

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 15% 0 15%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 1% 0 0%;
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
`;
const Shiedmain = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left:15px;
    img{
        margin-left:15vw;
    }
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-top:15%;
    margin-bottom:20%;
img{
}
}
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.content};
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-top: 13%;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    line-height: 130%;
    font-weight: 900;
  font-size: 32px;
  }
`;
const Box = styled.div`
  display: flex;
  width: 550px;
  margin-left:25px;
`;

export default function Shield() {
  return (
    <Shiedmain>
        <Removal ml="70%">
        <img src="/images/Shieldtoken.svg"  />

        </Removal>
    <Flex>
    <img src="/images/Shield.svg" style={{maxWidth:"700px"}}/>
    <Box>
      <Text content="50px" color="rgba(255,255,255,1)">
        <Text content="50px" color="#53BF0A">
          24/7
        </Text>{" "}
        access to full serice customer support
      </Text>
    </Box>
  </Flex>
  </Shiedmain>

  )
}
