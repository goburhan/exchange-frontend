import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 5% 5% 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      margin: 30px 7% 0 7%;
    }
  }
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

export default function Banks() {
  return (
    <>
      <Flex>
        <Container>
          <Text content="50px" color="rgba(255,255,255,1)">
            GulfCoin Will be listed on
          </Text>
          
        </Container>
      </Flex>
      <Flex>
        <img src="images/Mcx.svg" />
        <img src="images/Gulfexchange.svg" />
        <img src="images/Lbank.svg" />
        <img src="images/Bitmart.svg" />
      </Flex>
    </>
  );
}
