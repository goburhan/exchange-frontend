import React from "react";
import styled from "styled-components";
import { Flex } from "../StyledComponents/Flex";
import { StyledButton } from "../StyledComponents/Button";

const Buton = styled(StyledButton)`
@media (max-width: ${({ theme }) => theme.mobile}) {
   display:none;
`;
const Navibar = styled.div`
  display: flex;
  position:fixed;
  width: 100vw;
  height: 100px;
  justify-content: flex-end;
  background-color: rgba(35, 35, 34, 0.5);
`;



const Items = styled.div`
  display: flex;
  margin: 0% 5% 0% 30px;
  place-items: center;

  div {
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin-left: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    a{
     display:none;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: ${(props) => props.content};
  width: 50vw;
  margin-left: 87px;
  margin-right: 87px;
  div{
    text-decoration:none;
    margin-right:20px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content:center;
    width: 10vw;
`;
const Margin = styled.div`
 height:150px;
 @media (max-width: ${({ theme }) => theme.mobile}) {
  height:20px;
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
            <div>Login</div>
            <div>Register</div>

            <Buton
             
              radius="18px"
              style={{ width: "160px", height: "44px", marginLeft: "20px" }}
            >
              Get Started
            </Buton>
          </Items>


        </Container>
      </Navibar>
      <Margin></Margin>
    </>
  );
}
