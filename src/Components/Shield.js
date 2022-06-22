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
    margin: 0 0% 0 0%;
    justify-content:center;
    img{
      margin-right:30px;
      max-width:280px; 
      min-width:120px;
  
    }
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
`;
const Shiedmain = styled.div`
margin-top:15%;
margin-bottom:20%;
justify-content:space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left:15px;
    margin-top:25%;
    margin-bottom:5%;

    img{
        margin-left:15vw;
    }
    
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {


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
  @media (max-width: ${({ theme }) => theme.tablet}) {
    line-height: 130%;
    font-weight: 900;
  font-size: 40px;
  }
`;
const Box = styled.div`
  display: flex;
  width: 550px;
  margin-left:25px;
  text-alignment:center;
`;

export default function Shield() {
  return (
    <Shiedmain>
        <Removal ml="70%">
        <img src="/images/Shieldtoken.png"  />

        </Removal>
    <Flex>
    <img src="/images/Shield.svg" />
    <Box>
      <Text content="50px" color="rgba(255,255,255,1)">
        <Text content="50px" color="#53BF0A">
          24/7
        </Text>{" "}
        access to full customer support service 
      </Text>
    </Box>
  </Flex>
  </Shiedmain>

  )
}
