import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Label } from '../src/index.js'

storiesOf('Atom/Label', module)
  .add('primary with text', () => <Label>Label Text</Label>)
  .add('secondary with text', () => <Label secondary>Label Text</Label>)
  .add('shadow with text', () => [
    <Label style={{ marginBottom: '2em' }} key={0} shadow>
      primary shadow
    </Label>,
    <Label key={1} secondary shadow>
      secondary shadow
    </Label>,
  ])
