import { Link } from 'gatsby'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeManagerContext } from '../styles/themeManager'
import Uni from '../images/uni.inline.svg'

const StyledFooter = styled.p`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  font-size: 14px;
  font-style: italic;
  max-width: 200px;
  opacity: 0.4;
  color: ${({ theme }) => theme.colors.link};
`

const Footer = () => {
  return <StyledFooter>This site is a work in progress. Found an issue? Get in touch.</StyledFooter>
}
export default Footer