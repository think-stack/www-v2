import React from "react"
import styled from "styled-components"
import HubspotForm from "react-hubspot-form"

export default function CampaignForm() {
  return (
    <Form>
      <HubspotForm
        portalId="6503958"
        formId="90789743-fb50-4018-9e17-c66061e6dec8"
        loading={<div>Loading...</div>}
        // onSubmit={() => console.log("Submit!")}
        // onReady={() => console.log("Form ready!")}
      />
    </Form>
  )
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 5rem;
  width: 80%;

  @media screen and (min-width: 700px) {
    width: 50%;
  }
`
