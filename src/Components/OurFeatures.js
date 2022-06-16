import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

const Flex = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.content};
`;
const Container = styled.div`
  width: 780px;
  text-align: center;
  margin-top: 100px;
  justify-content: center;
`;
const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top:100px;
margin-left:${(props) => props.ml};
text-align:center;
  background: linear-gradient(106.44deg, #071b0a 23%, #09210c 113.13%);
  border: 1px solid transparent;
  border-radius: 25px;
  width: 380px;
  padding:25px;
`;
const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 100px 7% 0 7%;
  justify-content: flex-end;
`;

export default function OurFeatures() {
  return (
    <>
      <Flex>
        <Container>
          <Text content="50px" color="rgba(255,255,255,1)">
            Our Features
          </Text>
          
        </Container>
      </Flex>
      <Flex>
      <Cards>
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
      
      <Box>
        <Removal>
          <img src="images/Token3.svg" />
        </Removal>
      </Box>
    </>
  );
}
