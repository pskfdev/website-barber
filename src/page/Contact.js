import React, { useState } from "react";
import Header from "../component/Header.js";
import styled from "styled-components";
import { Container, Wrap } from "../styles/styledElement";
import { ImPhone, ImMail4, ImLocation2 } from "react-icons/im";

const WrapContact = styled(Wrap)`
  display: flex;
  margin-bottom: 80px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

const ContactItems = styled(Wrap)`
  display: flex;

  @media screen and (max-width: 750px) {
    margin-bottom: 20px;
  }
`;

const WrapForm = styled(Wrap)`
  display: flex;
  margin-bottom: 20px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0px 13px;
  font-size: 12px;
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 98px;
  margin-left: 10px;
  padding: 10px;
  font-size: 12px;

  @media screen and (max-width: 550px) {
    margin: 20px auto;
  }
`;
const Button = styled.button`
  width: 20%;
  height: auto;
  padding: 12px 45px;
  font-size: 13px;
  background-color: rgba(34, 34, 34, 0.9);
  color: #fff;
  transition: 0.4s ease-in-out;
  border: none;
  cursor: pointer;
  margin-right: 0;
  border-radius: 2px;
  letter-spacing: 2px;
  &:hover {
    background-color: gray;
    transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 790px) {
    padding: 12px 3px;
  }
`;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  return (
    <>
      <Header header="CONTACT" />
      <Container>
        <WrapContact>
          <ContactItems>
            <p>
              <ImPhone />
            </p>
            <Wrap style={{ margin: "0 1rem" }}>
              <h4>CALL US</h4>
              <p>+61 3 8376 6284</p>
            </Wrap>
          </ContactItems>
          <ContactItems>
            <p>
              <ImLocation2 />
            </p>
            <Wrap style={{ margin: "0 1rem" }}>
              <h4>ADDRESS</h4>
              <p>245 Quigley Blvd, Ste K</p>
            </Wrap>
          </ContactItems>
          <ContactItems>
            <p>
              <ImMail4 />
            </p>
            <Wrap style={{ margin: "0 1rem" }}>
              <h4>EMAIL</h4>
              <p>support@bestlooker.pro</p>
            </Wrap>
          </ContactItems>
        </WrapContact>
        <Wrap>
          <form action="http://localhost:3000" >
            <WrapForm>
              <Wrap>
                <Input type="text" name="name" placeholder="Name" onChange={(e) => {setName(e.target.value)}} />
                <br />
                <br />
                <Input type="email" name="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
              </Wrap>
              <Textarea name="message" id="message" placeholder="Message" onChange={(e) => {setMessage(e.target.value)}} />
            </WrapForm>
            <Wrap style={{ display: "flex", justifyContent: "space-between" }}>
              <p>All the fields are required</p>
              <Button type="submit">SUBMIT</Button>
            </Wrap>
          </form>
        </Wrap>
      </Container>
      <Wrap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12286.715636833376!2d-75.59837531200412!3d39.65694025682884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3d191cf13%3A0xf4674106f987fe3a!2s245+Quigley+Blvd+Ste+K%2C+New+Castle%2C+DE+19720%2C+USA!5e0!3m2!1sen!2sua!4v1530266633608"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex="0"
          allowfullscreen=""
        />
      </Wrap>
    </>
  );
}

export default Contact;
