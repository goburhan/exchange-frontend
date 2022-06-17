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
    flex-wrap:wrap-reverse;
    justify-content: center;
  }
`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  line-height:65px;
  font-size: ${(props) => props.content};
  @media (max-width: ${({ theme }) => theme.bigscreen}) {
    margin-top:120px;

  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left:50px;
    font-weight: 900;
font-size: 32px;
line-height: 130%;

  }
`;
const Box = styled.div`
  display: flex;
  width: 650px;
`;
const Margin = styled.div`
margin-top:20%;
`;

export default function Lock() {
  return (
    <>
      <Flex>
        <Box>
          <Text content="50px" color="#fff">
            Take your first step into safe , secure crypto investing
            <Removal>
              <img
                src="/images/Token8.svg"
                style={{
                  position: "absolute",
                }}
              />
            </Removal>
          </Text>
        </Box>

          <img src="/images/Lock.svg"  />
       
      </Flex>

      <Margin>
       </Margin>

    </>
  );
}
