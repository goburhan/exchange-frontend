import React, { Component, PropTypes } from "react";
import styled from "styled-components";
import { StyledButton } from "../../StyledComponents/Button";
import background from "./loginscreen.png";
import FormboxLogin from "../../Components/Register/FormBoxLogin";

const Flex = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
`;
const Leftside = styled.div`
  width: 70vw;
  background-image: url(${background});
  background-size: 1600px 140vh;
  background-repeat: no-repeat;
  background-position: left;
  text-align: center;
  color: #fff;
  font-weight: 900;
  font-size: 85px;
  text-alignment: center;
  img {
    margin-top: 50px;
    margin-bottom: 230px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;

    img {
      margin-bottom: 0px;
    }
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
`;

const Maincomponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
  }
`;
const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 85px;
  line-height: 130%;
  /* or 110px */

  text-align: center;
`;
const Box = styled.div`
  display: flex;
  margin
  width:80%;
  flex-direction: column;
  img {
    margin-left: 55px;
    max-width: 250px;
  }
`;

export default function Login() {
  return (
    <Maincomponent>
      <Flex>
        <Leftside>
          <Box>
            <img src="images/Registerlogo.svg" />
            <Text>We make crypto clear and simple !</Text>
          </Box>
        </Leftside>

        <FormboxLogin />
      </Flex>
    </Maincomponent>
  );
}
