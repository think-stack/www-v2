import React, { useState } from "react"
import styled from "styled-components"

export default function CampaignForm() {
  return (
    <Form
      name="campaignContact"
      method="post"  
      data-netlify="true"
      action="/"
    >
      <label htmlFor="cf-name"></label>
      <Input
        type="text"
        name="name"
        id="cf-name"
        placeholder="Name"
        required=""
      />
      <label htmlFor="cf-email" aria-label="email"></label>
      <Input
        type="email"
        name="email"
        id="cf-email"
        placeholder="Email"
        required=""
      />
      <label htmlFor="cf-phone" aria-label="phone"></label>
      <Input
        type="text"
        name="phone"
        id="cf-phone"
        placeholder="Phone Number"
        required=""
      />
      <label htmlFor="cf-message" aria-label="message"></label>
      <TextArea
        name="message"
        id="cf-message"
        rows="10"
        cols="50"
        placeholder="Ask us something"
      ></TextArea>
      <label htmlFor="bot-field" aria-label="bot-field"></label>
      <input name="bot-field" type="hidden" />
      <Button type="submit">submit</Button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 5rem;
  width: 80%;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`

const Input = styled.input`
  border-style: none;
  border-bottom: 2px solid var(--darkGreen);
  font-size: 1.2rem;
  margin: 0 auto 1rem;
  text-align: left;
  width: 80%;

  @media screen and (min-width: 48rem) {
    width: 50%;
  }
`

const TextArea = styled.textarea`
  border-style: none;
  border-bottom: 2px solid var(--darkGreen);
  font-size: 1.2rem;
  height: 2rem;
  margin: 0 auto 1rem;
  text-align: left;
  width: 80%;

  @media screen and (min-width: 48rem) {
    width: 50%;
  }

  &:focus {
    height: 4rem;
  }
`

const Button = styled.button`
  align-self: center;
  background-color: var(--green);
  border-radius: 2rem;
  color: var(--white);
  font-family: "TTSupermolot-Regular";
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.2rem;
  line-height: 150%;
  margin-top: 2rem;
  max-width: 10.3125rem;
  min-width: 6.5625rem;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  border: 0;

  &:hover {
    cursor: pointer;
  }
`
