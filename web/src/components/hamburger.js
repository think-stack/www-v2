import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  margin: 2.75rem 2rem 0 0;
  width: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`

const Span = styled.span`
  background-color: ${props =>
    props.isScrolled || (!props.isIndex && !props.navActive)
      ? `#4e5859`
      : `#fff`};
  background-color: ${props => props.bgColor ? `var(--white)` : `var(--darkGreen)`};
  border-radius: 1rem;
  height: 3px;
  transition: transform 250ms ease, width 50ms ease;
  width: 100%;
  &:nth-of-type(1) {
    transform: ${props =>
      props.navActive
        ? `rotate(45deg) translate(4px, 8px)`
        : `rotate(0) translate(0, 0)`};
  }
  &:nth-of-type(2) {
    width: ${props => (props.navActive ? ` 0` : `100%`)};
  }
  &:nth-of-type(3) {
    transform: ${props =>
      props.navActive
        ? `rotate(-45deg) translate(3px, -8px)`
        : `rotate(0) translate(0, 0)`};
  }
`

const Hamburger = ({ isIndex, isScrolled, handleNavClick, navActive, navToggle, bgColor }) => (
  <Wrapper onClick={navToggle}>
    <Span isIndex={isIndex} isScrolled={isScrolled} navActive={navActive} bgColor={bgColor}/>
    <Span isIndex={isIndex} isScrolled={isScrolled} navActive={navActive} bgColor={bgColor}/>
    <Span isIndex={isIndex} isScrolled={isScrolled} navActive={navActive} bgColor={bgColor}/>
  </Wrapper>
)

export default Hamburger
