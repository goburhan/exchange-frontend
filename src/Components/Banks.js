import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

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
  font-weight: 900;
  line-height: 130%;
  font-size: ${(props) => props.content};
`;
const Container = styled.div`
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
      <Flex>
        <Removal>
        <img src="images/Token6.svg" />

        </Removal>
        <Removal>
        <img src="images/Phone.svg" />
          
        </Removal>
      </Flex>
    </>
  );
}
