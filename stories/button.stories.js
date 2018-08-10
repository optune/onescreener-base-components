import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { AnchorButton, Button, AddButton } from '../src/index.js'

storiesOf('Atom/Buttons/Button', module)
  .add('primary with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('primary with text and shadow', () => (
    <Button shadow onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('secondary with text', () => (
    <Button secondary onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('secondary with text and shadow', () => (
    <Button secondary shadow onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('primary with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Atom/Buttons/AnchorButton', module)
  .add('primary with text', () => <AnchorButton>Next</AnchorButton>)
  .add('primary with text and a Link', () => (
    <AnchorButton href="https://www.onescreener.com">Next</AnchorButton>
  ))
  .add('secondary with much more text', () => (
    <AnchorButton secondary>
      <em>Next</em> is a great name for an AnchorButton. By the way, you could
      click here, and try to copy it&#39;s text but nothing will happen!
    </AnchorButton>
  ))
  .add('secondary with text, a Link and shadow', () => (
    <AnchorButton secondary shadow href="https://www.onescreener.com">
      Next
    </AnchorButton>
  ))
  .add('primary with some emoji', () => (
    <AnchorButton>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </AnchorButton>
  ))

storiesOf('Atom/Buttons/AddButton', module).add('addButton', () => (
  <AddButton href="#" />
))
