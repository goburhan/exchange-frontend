import React from "react";
import styled from "styled-components";
import { StyledButton } from "../StyledComponents/Button";
import { Removal } from "../StyledComponents/Box";
import { motion } from "framer-motion";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => props.top};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: ${(props) => props.justify};
    flex-wrap:wrap-reverse;
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  margin-bottom:16%;
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
    font-weight: 400;
    font-size: 17px;
    line-height: 66px;

  }
`;
const Title = styled(Text)`
  font-size: 140px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-weight: 700;
    font-size: 72px;
    line-height: 76px;
  }
`;
const Container = styled.div`
  margin-top: 100px;
  flex-wrap: wrap;
justify-content:left;

  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-left:140px;
    width:40vw;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
  width:100vw;
  margin-left:10%;
  margin-top:0;
  margin-bottom:100px;
    img {
      max-width: 301px;
      margin-right: 35px;
    }
  }
`;

const Laptop = styled.div`
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    img {
      margin-top: 100px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left:auto;
    margin-right:auto;
    img {
      max-width: 361px;
    }
  }
`;


export default function Enterance() {
  return (

    <Flex >
      <Container>
       
        <Title>
          Crypto Trading
          <Removal>
            <img
              src="images/Token1.svg"
              style={{ position: " absolute ", marginLeft: "-5%" }}
            />
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
            <StyledButton
            style={{ background: "linear-gradient(240.81deg, #56C00B -53.41%, #53BF0A 5.77%, #92E01F 69.17%)"}}
             radius="18px">Start Trading</StyledButton>
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
        <img src="images/Laptop.svg" />
      </Laptop>
    </Flex>

  );
}
