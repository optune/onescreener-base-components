import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import { CenterContainer, Profile } from '../src/index.js'

storiesOf('Molecule/Profile', module)
  .add('Profile', () => <Profile username="Dev" />)
  .add('Profile with a long name', () => (
    <CenterContainer>
      <Profile username="abcdefghijklmn opqrstuvwxyz" openDefault />
    </CenterContainer>
  ))
  .add('Profile open', () => <Profile username="Username" openDefault />)
  .add('Profile with a picture', () => (
    <Profile
      username="Dev"
      url="https://interactive-examples.mdn.mozilla.net/media/dino.svg"
    />
  ))
