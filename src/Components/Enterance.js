import React from "react";
import styled from "styled-components";
import { StyledButton } from "../StyledComponents/Button";
import { Removal } from "../StyledComponents/Box";
import Entrancetokens from "./Entrancetokens"

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const Text = styled.text`
  display: flex;
  color: ${(props) => props.color || "white"};
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  letter-spacing: -0.065em;
  font-size: ${(props) => props.content};
  line-height: 134px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 18px;
    line-height: 30px;
  }
`;
const Title = styled(Text)`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 32px;
  }
`;
const Container = styled.div`
  width: 45vw;
  margin-top: 100px;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img{
      max-width:331px;
    }
  }
`;
const Box = styled.div`
@media (max-width: ${({ theme }) => theme.mobile}) {
  display:none;
}
`;

export default function Enterance() {
  return (
    <Flex>
      <Container style={{ marginLeft: "85px" }}>
        <Title content="140px">
          Crypto <br /> Trading
        </Title>
        <Text content="38px">
          <Text content="38px" color="#79D316">
            Gulfex&nbsp;
          </Text>
          is the place to start your trading
        </Text>
        <Flex>
          <StyledButton radius="18px">Start Trading</StyledButton>
          <StyledButton
            radius="18px"
            style={{ backgroundColor: "#212D1A", marginLeft: "15px" }}
          >
            View Exchange
          </StyledButton>
        </Flex>
        <Removal>
        <img src="images/Token2.svg" style={{ position: "absolute" }} />
        </Removal>
        
      </Container>

      <Container>
      <Removal>
        <img src="images/Token1.svg" style={{ position: "absolute" }} />
</Removal>
        <img src="images/Laptop.svg" style={{ marginLeft: "45px" }} />
      </Container>

    </Flex>
  );
}
