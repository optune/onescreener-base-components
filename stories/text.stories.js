import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Atom/Text', module).add('text', () => (
  <span>
    Hello <a href="https://app.optune.me">https://app.optune.me</a>
  </span>
))
