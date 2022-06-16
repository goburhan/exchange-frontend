import React from "react";
import styled from "styled-components";

const Tokens = styled.div`
position:absolute;
margin-left:50%;
`;

export default function Entrancetokens() {
  return (
    <>
      <Tokens>
      <img src="images/Token1.svg" style={{ marginTop:"30%" }} />

    <img src="images/Token2.svg" style={{  margin:"4% 25% 25% 25%" }} />
    </Tokens>

    </>
  
  );
}
