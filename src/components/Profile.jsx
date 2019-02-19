/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../style/colors.js'
import { faintShadow } from '../style/shadows.js'

const Round = styled.div`
  box-sizing: border-box;
  margin: 8px;
  width: 36px;
  height: 36px;
  border-radius: 28px;
  z-index: 1;
`

const ProfilePic = styled(Round)`
  ${({ shadow }) => shadow && `box-shadow: ${faintShadow}`};
  transition: all 0.6s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};
  background: ${({ url }) => url || `${colors.poison}`};
`

const Text = styled.span`
  padding: 2em;
  color: inherit;
`

const Tooltip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border: rgba(127, 255, 127, 0.3) 1px solid;
  border-radius: 1em;
  box-shadow: ${faintShadow};
  color: ${colors.poison};
  font-weight: 600;
  user-select: none;
  overflow: hidden;

  background: ${({ open }) =>
    open ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 255, 0, 1)'};
  min-width: ${({ open }) => (open ? '300%' : '100%')};
  right: ${({ open }) => (open ? '200%' : '0%')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ open }) => (open ? 1 : 2)};
  transition: all 0.4s cubic-bezier(0.45, 0.96, 0, 1);
`

const Profile = ({ url, username, openDefault = false }) => {
  const [open, setOpen] = useState(openDefault)
  return (
    <ProfilePic url={url} shadow={!open}>
      <Tooltip onClick={() => setOpen(!open)} open={open}>
        <Text>{username}</Text>
      </Tooltip>
    </ProfilePic>
  )
}

export default Profile
