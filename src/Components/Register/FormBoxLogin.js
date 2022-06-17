import React, { useState } from "react";
import { Form, Wrapper, Terms } from "../../StyledComponents/Form.styled"
import Loginbutton from "./Loginbutton";
import InputField from "./InputField";
import { inputData } from "../../logindata";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const Text = styled.text`
color: ${(props) => props.color};
font-weight: ${(props) => props.weight};
font-size:${(props) => props.size};
line-height: 120%;
margin-right:${(props) => props.mr};
letter-spacing: -0.02em;
a{
  color:#007200;
  text-decoration:none;
}
 @media (max-width: ${({ theme }) => theme.mobile}) {
}
  }
`;
const Box = styled.div`
display:flex;

flex-direction:column;
color: #BBBBBB;
 @media (max-width: ${({ theme }) => theme.mobile}) {
}
  }
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 2px;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const FormBox = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmedpassword: "",
    firstname: "",
    lastname: "",
  });

  // onSubmit Handler Function
  const submitHandler = (e) => {
    e.preventDefault();
    alert("free trial claimed");
  };

  //onChange Handler Function
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Box>
        <Text mr="150px" weight="600" color="#53BF0A" size="30px">
          Adventure starts here
        </Text>
        <Text weight="400" color="#B1B5C3" size="16px">
          Register to Acces the trading platform!
        </Text>
      </Box>

      {inputData.map((input) => {
        return (
          <InputField
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={changeHandler}
          />
        );
      })}
      <Wrapper>
        <Checkbox />
        <HiddenCheckbox />
        <Loginbutton />
        <Text color="#B1B5C3" size="14px" weight="400">
          <Text color="#007200" weight="400" size="14px">
          </Text>
        </Text>
      </Wrapper>
    </Form>
  );
};

export default FormBox;
