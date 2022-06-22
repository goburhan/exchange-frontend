import React from "react";
import styled from "styled-components";
import { Removal } from "../StyledComponents/Box";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 15% 0 15%;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap:wrap-reverse;
    margin: 0 2% 0 2% !important;
    img{
      max-width:290px; 
      min-width:120px;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-wrap:wrap-reverse;
    justify-content: center;
    margin: 0 24% 0 22%;
  }



`;
const Text = styled.text`
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
    margin-top:120px;
    font-weight: 900;
  line-height:65px;
  font-size: ${(props) => props.content};
 
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-left:${(props) => props.ml};
    font-weight: 900;
    margin-top:60px;
font-size: 32px;
line-height: 130%;

  }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-weight: 900;
    margin-top:60px;
font-size: 40px;
line-height: 130%;

  }
`;
const Box = styled.div`
  display: flex;
  width: 650px;
`;
const Margin = styled.div`
margin-top:20%;
@media (max-width: ${({ theme }) => theme.tablet}) {
  margin-top:0%;
}
`;

export default function Lock() {
  return (
    <>
      <Flex>
        <Box>
          <Text ml="50px" content="50px" color="#fff">
          Take your first step into {" "}
            <Text color ="#53BF0A">
            safe   {" "}
            </Text>
            ,{" "}
            <Text color ="#53BF0A">
            secure {" "}
            </Text>
          crypto investing
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
