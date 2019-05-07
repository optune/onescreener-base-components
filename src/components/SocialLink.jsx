/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const LinkBox = styled.div`
  margin: 10px;
  width: 32px;
  height: 32px;
`
const Link = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
`

const SocialLink = ({ children, ...rest }) => (
  <LinkBox>
    <Link {...rest}>{children}</Link>
  </LinkBox>
)

export default SocialLink
