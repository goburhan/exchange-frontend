import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 15% 0 15%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 1% 0 0%;
  }
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-family: "Quicksand", sans-serif;
  font-weight: 900;
  font-size: ${(props) => props.content};
`;
const Box = styled.div`
  display: flex;
  width:650px;
`;

export default function Willbelist() {
  return (
    <>
      <Flex>
        <img src="/images/Shield.svg" />
        <Box>
          <Text content="34px" color="rgba(255,255,255,1)">
            <Text content="34px" color="#53BF0A">
              24/7
            </Text>{" "}
            access to full serice customer support
          </Text>
        </Box>
      </Flex>
      <Box>
        <Removal>
          <img src="/images/Bnbtoken.svg" />
        </Removal>
      </Box>
      <Flex>
      <Box>
        <Text content="34px" color="#fff">
          Take your first step into safe , secure crypto investing
        </Text>
        </Box>
        <Removal>
          <img src="/images/Lock.svg" />
        </Removal>
      </Flex>
      <Removal>
        <img src="/images/Token4.svg" />
      </Removal>

      <Flex></Flex>
    </>
  );
}
