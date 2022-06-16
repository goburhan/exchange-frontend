import React from "react";
import styled from "styled-components";
import { Box, Removal } from "../StyledComponents/Box";
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 15% 0 15%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    img{
      margin: 0% 0% 0% 0%;
    }
  }
`;

export default function Willbelist() {
  return (
    <>
      <Flex>
        <img src="/images/Shield.svg" />
        <img src="/images/24Acces.svg" style={{ minWidth: "480px" }} />
      </Flex>
      <Box>
        <Removal>
          <img src="/images/Bnbtoken.svg" />
        </Removal>
      </Box>
      <Flex>
        <img src="/images/Takeyour.svg" style={{ minWidth: "480px" }} />
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
