import React from "react";
import styled from "styled-components";
import { Box } from "../StyledComponents/Box";
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15% 0 15%;
`;

export default function Willbelist() {
  return (
    <>
      <Flex>
        <img src="/images/Shield.svg" />
        <img src="/images/24Acces.svg" />
      </Flex>
      <Box>
        <img src="/images/Bnbtoken.svg" />
      </Box>
      <Flex>
        <img src="/images/Takeyour.svg" />
        <img src="/images/Lock.svg" />
      </Flex>
      <img src="/images/Token4.svg" />
      <Flex>
       
      </Flex>
    </>
  );
}
