import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
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

export default function BuyAndSellText() {
  return (
    <Flex>
      <Container>
        <Text content="50px" color="rgba(255,255,255,1)">
          Buy and sell with the lowest fees in the industry
        </Text>
     
      </Container>

    </Flex>
    
  );
}
