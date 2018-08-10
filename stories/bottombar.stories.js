import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { BottomBar, Button, ButtonContainer } from '../src/index.js'

const HighButton = Button.extend`
  height: 4em;
`

storiesOf('Molecule/Bottombar/text', module)
  .add('Bottombar with text', () => <BottomBar>Text 1 2 3</BottomBar>)
  .add('Bottombar with wrapped text', () => (
    <BottomBar>
      <ButtonContainer>Text 1 2 3</ButtonContainer>
    </BottomBar>
  ))
storiesOf('Molecule/Bottombar/1button', module)
  .add('Bottombar with 1 button', () => (
    <BottomBar>
      <Button>Next</Button>
    </BottomBar>
  ))
  .add('Bottombar with wrapped 1 button', () => (
    <BottomBar>
      <ButtonContainer>
        <Button>Next</Button>
      </ButtonContainer>
    </BottomBar>
  ))

storiesOf('Molecule/Bottombar/2buttons', module)
  .add('Bottombar with 2 buttons', () => (
    <BottomBar>
      <Button secondary>Previous</Button>
      <Button>Next</Button>
    </BottomBar>
  ))
  .add('Bottombar with 2 wrapped buttons', () => (
    <BottomBar>
      <ButtonContainer>
        <Button secondary>Previous</Button>
        <Button>Next</Button>
      </ButtonContainer>
    </BottomBar>
  ))

storiesOf('Molecule/Bottombar/3buttons', module)
  .add('Bottombar with 3 buttons', () => (
    <BottomBar>
      <Button secondary>Previous</Button>
      <Button>Next</Button>
      <HighButton secondary shadow>
        Preview
      </HighButton>
    </BottomBar>
  ))
  .add('Bottombar with 3 wrapped buttons', () => (
    <BottomBar>
      <ButtonContainer>
        <Button secondary>Previous</Button>
        <Button>Next</Button>
        <HighButton secondary shadow>
          Preview
        </HighButton>
      </ButtonContainer>
    </BottomBar>
  ))
