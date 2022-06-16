import React from "react";
import styled from "styled-components";
import { Flex } from "../StyledComponents/Flex";
import { StyledButton } from "../StyledComponents/Button";

const Navibar = styled.div`
  display: flex;
  width: 100vw;
  height: 100px;

  justify-content: flex-end;
  background-color: rgba(35, 35, 34, 0.5);
`;

const Items = styled.div`
  display: flex;
  margin: 0% 5% 0% 30px;
  place-items: center;

  a {
    color: #fff;
    margin-left: 20px;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.content};
  width: 50vw;
  margin-left: 87px;
  margin-right: 87px;
`;

export default function Navbar() {
  return (
    <>
      <Navibar>
        <Container content="start">
          <img src="/images/Logo.svg" style={{ maxWidth: "183px" }} />
        </Container>
        <Container content="flex-end">
          <Items>
            <a>Features</a>
            <a>FAQ</a>
            <a>Blog</a>
            <StyledButton radius="18px"
              style={{ width: "160px", height: "44px", marginLeft: "20px" }}
            >
              Get Started
            </StyledButton>
          </Items>
        </Container>
      </Navibar>
    </>
  );
}
