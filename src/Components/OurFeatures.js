import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

const Flex = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-top: 155px;
    
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0px;
    
  }
 
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.content};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-weight: 900;
    font-size: 22px;
    line-height: 130%;
  }
`;
const Container = styled.div`
display:flex;
  width: 780px;
  text-align: center;
  margin-top: 100px;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 0px;
    
  }
 
`;
const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left:${(props) => props.ml};
text-align:center;
  background: linear-gradient(106.44deg, #071b0a 23%, #09210c 113.13%);
  border: 1px solid transparent;
  border-radius: 25px;
  width: 380px;
  padding:25px;
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-top: 15px;
    
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right:15px;
    
  }
`;
const Box = styled.div`
`;

export default function OurFeatures() {
  return (
    <>
    <Removal >
    <img src="/images/OurFeature1.svg" style={{position:"absolute" , marginBottom:"80px" ,marginLeft:"75%"}} />

    </Removal>

      <Flex>

        <Container>

          <Text content="50px" color="rgba(255,255,255,1)">
            Our Features
          </Text>
        </Container>
      </Flex>
      <Flex>
      <Cards ml="15px">
        <img src="/images/Features1.svg" style={{maxWidth:150}} />
        <Text content="34px" color="rgba(255,255,255,1)">
          Manage your Portfolio
        </Text>
      
      </Cards>
      <Cards ml="15px">
        <img src="/images/Features2.svg" style={{maxWidth:150}} />
        <Text content="34px" color="rgba(255,255,255,1)">
         Security
        </Text>
       
      </Cards>
      <Cards ml="15px">
        <img src="/images/Features3.svg" style={{maxWidth:150}} />
        <Text content="34px" color="rgba(255,255,255,1)">
          Customer Service
        </Text>
        <Text content="34px" color="#53BF0A">
         24/7
        </Text>
        
      </Cards>
      </Flex>
      
      <Removal>
          <img src="/images/Bnbtoken1.svg" style={{marginRight:"50%" }} />
        </Removal>
    </>
  );
}
