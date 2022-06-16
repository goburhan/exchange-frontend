import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
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
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img{
      margin-bottom:25px;
    }
  }
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
          <br />
          <Text content="16px" color="rgba(255,255,255,0.65)">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit.
          </Text>
        </Container>
      </Flex>
      <Cards>
        <img src="images/Features1.svg" />
        <img  style={{marginLeft:"20px"}} src="images/Features2.svg" />
        <img style={{marginLeft:"20px"}} src="images/Features1.svg" />
      </Cards>
      <Box>
        <Removal>
      <img src="images/Token3.svg" />
      </Removal>
      </Box>
    </>
  );
}
