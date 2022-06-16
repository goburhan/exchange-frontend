import React from "react";
import styled from "styled-components";
import { StyledButton } from "../StyledComponents/Button";
import { Removal } from "../StyledComponents/Box";
import { motion } from "framer-motion";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    justify-content:center;
  }
`;
const Text = styled.text`
  display: flex;
  color: ${(props) => props.color || "white"};
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: -0.065em;
  font-size: ${(props) => props.content};
  line-height: ${(props) => props.lengthAdjust || "135px"};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 18px;
    line-height: 30px;
  }
`;
const Title = styled(Text)`
  font-size: 142px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 42px;
    text-align: center;
    line-height: 50px;
    justify-content: center;
  }
`;
const Container = styled.div`
display:flex;
  width: 40vw;
  margin-top: 100px;
  flex-wrap: wrap;
    
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-left:125px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left:45px;
    margin-right:95px;
    img {
      max-width:301px;
      margin-right:35px;
    }
  }
`;

const Laptop = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top:30px;
    img{
      max-width:301px;

    }
  }
`;

export default function Enterance() {
  return (
    <Flex>
      <Container>
        <Title>
          Crypto Trading
          <Removal>
          <img src="images/Token1.svg" style={{ position: " absolute "  , marginLeft:"-5%"}} />

          </Removal>
        </Title>
        <Text lengthAdjust="76px" content="38px">
          <Text lengthAdjust="76px" content="38px" color="#79D316">
            Gulfex&nbsp;
          </Text>
          is the place to start your trading
        </Text>
        <Flex style={{ flexWrap: "nowrap" }}>
          <a href=" https://gulfex.io/signup">
            {" "}
            <StyledButton radius="18px">Start Trading</StyledButton>
          </a>

          <a href=" https://gulfex.io/signup">
            {" "}
            <StyledButton
              radius="18px"
              style={{ backgroundColor: "#212D1A", marginLeft: "15px" }}
            >
              View Exchange
            </StyledButton>{" "}
          </a>
        </Flex>
      
          <Removal>
            <img src="images/Token2.svg" style={{ position: "absolute" }} />
          </Removal>
      </Container>
<Laptop>
<img src="images/Laptop.svg"  />

</Laptop>
    </Flex>
  );
}
