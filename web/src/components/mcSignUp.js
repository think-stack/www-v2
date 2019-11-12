import React, { useState } from 'react'
import styled from 'styled-components'

export default function McSignup () {
  const [ value, setValue ] = useState('')

  const updateVal = (e) =>  {
    setValue(e.target.value)
  }
  return (
    // <h2>form here</h2>
    <div id="mailchimp-form">
      <div id="mc_embed_signup">
        <Form action="https://thinkstack.us17.list-manage.com/subscribe/post?u=ad5c409073c6d208ca7885bd4&amp;id=c44a50e474" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate="">
          <div className="mc-field-group">
            <EmailInput placeholder="email" type="email" value={value} name="EMAIL" className="required email" id="mce-EMAIL" onChange={updateVal} />
          </div>
          <div id="mce-responses" className="clear">
            <div id="mce-error-response" className="response" style={{display: `none`}}></div>
            <div id="mce-success-response" className="response" style={{display: `none`}}></div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups> --> */}
            <div style={{
              position: `absolute`,
              left: `-5000px`
             }} aria-hidden="true">
              <input type="text" name="b_ad5c409073c6d208ca7885bd4_c44a50e474" tabindex="-1" value="" />
            </div>
            <div className="clear">
              <SubmitButton className="button" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  )
}

const Form = styled.form`
  text-align: right;
`

const EmailInput = styled.input`
  background-color: #244C5A;
  border-style: none;
  border-bottom: 2px solid #80B09C;
  color: var(--white);
  font-size: 1.2rem;
  margin-bottom: .5rem;
  text-align: right;
`

const SubmitButton = styled.input`
  background-color: var(--green);
  border: none;
  border-radius: 2rem;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-family: var(--headingFont);
  font-size: 1rem;
  letter-spacing: 0.1em;
  line-height: 1.25rem;
  margin: 1rem 0;
  padding: 1rem 3rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 600ms ease, color 600ms ease;

  &:hover {
    background-color: var(--white);
    color: var(--grey);
  }
`
