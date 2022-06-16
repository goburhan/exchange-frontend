import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Box = styled.div`
    justify-content: left;
    padding: 25px;
    width: 524px;
    gap: 10px;
    contain: content;
  `;

  const Text = styled.div`
color: #565976;
 margin-bottom:20px;
  }
`;
  const Email = styled.div`
width:304px;
height:56px;
text-align:center;
margin-top:30px;
border:1px solid #53BF0A ;
border-radius:10px;
color:#565976;
  }
`;

  const Flex = styled.div`
display:flex;
margin : 5% 5% 0 5%;
justify-content:space-evenly;
  }
`;
  const Container = styled.div`
  justify-content:center;
margin : 0% 25% 0 5%;
  }
`;
  const Footer = styled.div`
    position: absolute;
    width: 100vw;
    height: 536px;
    background: linear-gradient(106.44deg, #09120a 23%, #09210c 113.13%);
    border-radius: 25px;
  `;

  return (
    <Footer>
      <Flex>
        <Box>
          <img src="images/Logo.svg" maxWidth="80px" />
          <Text>
            Gulf EXchange, Neque porro quisquam est qui dolorem ipsum quia dolor
            sit amet Neque porro quisquam est qui dolorem ipsum quia dolor sit
            ame.
          </Text>
          <Email>
            Email Address
            <img src="images/Arrow.svg" />
          </Email>
        </Box>

        <Flex>
          <Container>
            <Text>Company</Text>
            <Text>About</Text>
            <Text>Contact Us</Text>
            <Text>Press</Text>
            <Text>News</Text>
            <Text>Blog</Text>
          </Container>
          <Container>
            <Text>Support</Text>
            <Text>FAQ</Text>
            <Text>Knowledge Base</Text>
            
          </Container>
          <Container>
            <Text>Policy</Text>
            <Text>Terms of use</Text>
            <Text>Privacy Policy</Text>
            <Text>Refund Policy</Text>
          </Container>
          <Container>
            <Text>Contacts</Text>
            <Text>exchance@gulfex.io</Text>
            <Text>+111 111 111</Text>
           
          </Container>
        </Flex>
      </Flex>
    </Footer>
  );
}
