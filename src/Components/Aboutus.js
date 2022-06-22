import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 15% 0 15%;
  img {
    max-width: 350px;
    min-width: 120px;
    margin-top: 180px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 0% 0 0%;
    justify-content: center;
    img {
      margin-top: 100px;
      max-width: 300px;
      min-width: 120px;
    }
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    justify-content: center;
  }
`;
const About = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: 15px;
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: auto;
  }
`;

const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.content};
  line-height: 150%;
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 240px;
  width: 550px;
  margin-left: 25px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: -50px;
  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    margin-top: 40px;
  }
`;

export default function Aboutus() {
  return (
    <About>
      <Flex>
        <img src="/images/Aboutus.svg" />
        <Box>
          <Text content="50px" weight="900" color="#E6E8EC">
            About Us <br />
          </Text>
          <Text content="16px" weight="400" color="#c2c2c2">
            Gulf exchange is one of the best places to buy and sell crypto
            online, thanks to our excellent service, low fees, versatile funding
            options and high security standards.
          </Text>
          <Text content="50px" weight="900" color="#E6E8EC">
            Our mission <br />
          </Text>
          <Text content="16px" weight="400" color="#c2c2c2">
            To make the financial system more fair, accessible, efficient and
            transparent enabled by the mass-adoption of blockchain technology
            and expanding the crypto community so that you and the rest of the
            world can achieve financial freedom by eliminating the financial
            barriers, evolve the global economy, and change the world for
            better.
          </Text>
        </Box>
      </Flex>
    </About>
  );
}
