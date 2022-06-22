import React from "react";
import styled from "styled-components";
import { StyledButton } from "../StyledComponents/Button";
import background from "./Yellowpaint.svg";
import { Removal } from "../StyledComponents/Box";
import Img from "react-cool-img"

const Carrermain = styled.div`
  display: flex;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 40%;
  img {
    padding: 20px;
  }
`;

const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-weight: 900;
    line-height: 130%;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 5% 0% 5%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img {
      margin: 70px 7% 0 7%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-left: ${(props) => props.ml};
  text-align: center;
  border: 1px solid transparent;
  border-radius: 25px;
  width: 419px;
  padding: 25px;
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right: 5px;
  }
`;

export default function Carrer() {
  return (
    <>
      {" "}
      
      <Carrermain>
        <Cards>
          <Text fontSize="50px" fontWeight="900">
            Career
          </Text>

          <Text fontSize="16 px" color="#c2c2c2">
            Come for the job ... Stay for challenge. Join us now !
          </Text>
          <img src="images/Carrer.svg" />
          <a href="https://www.linkedin.com/company/gulf-software-technology-ltd/jobs/">
            <StyledButton padding="16px 32px" radius="18px">
              Learn More
            </StyledButton>
          </a>
        </Cards>
      </Carrermain>
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
