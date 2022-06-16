import React from "react";
import styled from "styled-components";
import { StyledButton } from "../StyledComponents/Button";

const Flex = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  margin: 0 5% 0 5%;
`;
const Box = styled.div`
  display: flex;
  padding: 10px 10px 10px 0px;
  justify-content: space-between;
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.content};
`;
const Title = styled.div`
  text-align: center;
  margin-top:7%
`;
const Container = styled.div`
  text-align: left;
  width: 524px;
  contain: content;
  margin-top: 100px;
`;

export default function OurBlog() {
  return (
    <>
      <Title>
        <Text content="50px" color="rgba(255,255,255,1)">
          GulfCoin Will be listed on
        </Text>
        <br />
        <Text content="16px" color="rgba(255,255,255,0.65)">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit.
        </Text>
      </Title>

      <Flex>
        <Container>
          <img src="images/Ourblog1.svg" />
          <br />
          <br />
          <Text color="#fff">
            The Ukraine War: How Russia’s Aggression Affected Bitcoin & Crypto
            and What Might Happen Next
          </Text>
          <Box>
            <Text color="#898CA9">by Admin | 2 months ago</Text>
            <StyledButton radius="10px">Read More</StyledButton>
          </Box>
        </Container>
        <Container>
          <img src="images/Ourblog2.svg" />
          <br />
          <br />
          <Text color="#fff">
            The Ukraine War: How Russia’s Aggression Affected Bitcoin & Crypto
            and What Might Happen Next
          </Text>
          <Box>
            <Text color="#898CA9">by Admin | 2 months ago</Text>
            <StyledButton radius="10px">Read More</StyledButton>
          </Box>
        </Container>
      </Flex>
    </>
  );
}
