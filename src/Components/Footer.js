import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Box = styled.div`
    justify-content: left;
    padding: 25px;
    width: 524px;
    gap: 10px;
    contain: content;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding: 0px;
    }
  `;

  const Text = styled.div`
color: #BBBBBB;
 margin-bottom:20px;
 font-weight: ${(props) => props.font};
 @media (max-width: ${({ theme }) => theme.mobile}) {
  margin-bottom:5px;
}
  }
`;
  const Email = styled.div`
    width: 260px;
    text-align: center;
    padding: 15px;
    place-item: center;
    border: 1px solid #53bf0a;
    border-radius: 10px;
    color: #565976;
  `;

  const Flex = styled.div`
display:flex;

margin : 2% 5% 0% 5%;
justify-content:space-evenly;
@media (max-width: ${({ theme }) => theme.mobile}) {
  flex-wrap:wrap;
  justify-content:flex-start;
}
  }
`;
  const Container = styled.div`
  justify-content:center;
margin : 0% 25% 0 5%;
@media (max-width: ${({ theme }) => theme.mobile}) {
  margin : 5% 8% 0% 0%;
}
  }
`;
  const Footer = styled.div`
    width: 99vw;
    background: linear-gradient(106.44deg, #09120a 23%, #09210c 113.13%);
    border-radius: 25px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      padding:2px;
    }
  `;

  return (
    <Footer>
      <Flex>
        <Box>
          <img src="images/Logo.svg" maxWidth="80px" />
        </Box>

        <Flex>
          <Container>
            <Text font="bold">Company</Text>
            <Text>About</Text>
            <Text>Contact Us</Text>
            <Text>Press</Text>
            <Text>News</Text>
          </Container>
          <Container>
            <Text font="bold">Support</Text>
            <Text>Knowledge Base</Text>
          </Container>
          <Container>
            <Text font="bold">Policy</Text>
            <Text>Terms of use</Text>
            <Text>Privacy Policy</Text>
            <Text>Refund Policy</Text>
          </Container>
          <Container>
            <Text font="bold">Contacts</Text>
            <Text>exchance@gulfex.io</Text>
            <Text>+111 111 111</Text>
          </Container>
        </Flex>
      </Flex>
    </Footer>
  );
}
