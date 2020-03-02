import React from "react"
import styled from "styled-components"
import H2 from "../components/headings/h2"
import BgImg from "../images/TS-QuickFix-BG.jpg"
import HubspotForm from "react-hubspot-form"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: "center",
    "& label": {
      display: "none",
    },
    "& input[type='email']": {
      borderWidth: "0 0 2px",
      borderColor: theme.palette.secondary.main,
      backgroundColor: "transparent",
      width: "100%",
      padding: 5,
      color: "white",
      outline: "none",
      "&::placeholder": {
        color: "white",
        opacity: 1,
      },
      "&:-ms-input-placeholder": {
        color: "white",
      },
      "&::-ms-input-placeholder": {
        color: "white",
      },
    },
  },
  btn: {
    border: 0,
    display: "inline-block",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    borderRadius: "2rem",
    padding: "0.75rem 2rem",
    textTransform: "uppercase",
    fontFamily: "TTSupermolot-Regular",
    fontSize: "0.75rem",
    fontWeight: 900,
    lineHeight: "1.25rem",
    letterSpacing: "0.2em",
    transition: "background-color 600ms ease, color 600ms ease",
    marginTop: 18,
    cursor: "pointer",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: theme.palette.common.white,
      color: theme.palette.secondary.dark,
    },
  },
  errors: {
    listStyle: "none",
    margin: "10px 0 0",
    padding: 0,
    "& label, a": {
      display: "block",
      color: "white",
      fontSize: "0.9rem",
    },
  },
}))

export default function ContactCTA() {
  const classes = useStyles()
  return (
    <Section>
      <H2
        heading="Talk to one of our experts today"
        color="var(--white)"
        align="center"
      />
      <Form>
        <HubspotForm
          portalId="6503958"
          formId="ccbf3e00-fae5-4201-9bdc-7d1ae4822ed7"
          onSubmit={() => console.log("Submit!")}
          onReady={form => console.log("Form ready!")}
          loading={<div>Loading...</div>}
          cssClass={classes.form}
          submitButtonClass={classes.btn}
          errorMessageClass={classes.errors}
        />
      </Form>
    </Section>
  )
}

const Section = styled.section`
  background-color: var(--darkGreen);
  margin: 4.75rem auto;
  padding: 18rem 0 4rem;
  background-image: url(${BgImg});
  background-size: cover;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5625rem auto 0;
  max-width: 95%;
  width: 28.875rem;
`
