import React from 'react'
import { storiesOf } from '@storybook/react'

import { ColoredTextContainer } from '../src/index.js'

storiesOf('Atom/Text', module)
  .add('text', () => (
    <span>
      Hello <a href="https://app.optune.me">https://app.optune.me</a>
    </span>
  ))
  .add('ColoredTextContainer', () => (
    <ColoredTextContainer color={'#efbf00'}>
      <h1>Header</h1>
      <p>Text</p>
      <p>
        <b>Bold</b>
      </p>
    </ColoredTextContainer>
  ))
