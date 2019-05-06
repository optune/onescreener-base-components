import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import {
  Background,
  Button,
  CenterContainer,
  ContentContainer,
  AnchorButton,
} from '../src/index.js'

storiesOf('Atom/Container/Center', module)
  .addDecorator(withKnobs)
  .add('Centered elements', () => (
    <div>
      <CenterContainer column={boolean('Column', false)}>
        <Button>Left</Button>
        <p>
          Text Lorem ipsum whatever you like to read here it should be
          reaaaaally long and have <a href="#">Links</a> and such.
          <br />
          And also Linebreaks
        </p>
        <Button>Right</Button>
      </CenterContainer>
      <CenterContainer column={boolean('Column', false)}>
        <Button shadow secondary>
          Doge
        </Button>
        <Button shadow>Much wow</Button>
      </CenterContainer>
    </div>
  ))
  .add('non-centered elements', () => (
    <div>
      <div>
        <Button>Left</Button>
        <p>
          Text Lorem ipsum whatever you like to read here it should be
          reaaaaally long and have <a href="#">Links</a> and such.
          <br />
          And also Linebreaks
        </p>
        <Button>Right</Button>
      </div>
      <div>
        <Button shadow secondary>
          Doge
        </Button>
        <Button shadow>Much wow</Button>
      </div>
    </div>
  ))

storiesOf('Atom/Container/Content', module).add('primary with text', () => (
  <ContentContainer>
    <h1>Header</h1>
    <Button>Top</Button>
    <p>
      Text Lorem ipsum whatever you like to read here it should be reaaaaally
      long and have <AnchorButton href="#">Links</AnchorButton> and such.
      <br />
      And also Linebreaks
    </p>
    <Button>Bottom</Button>
  </ContentContainer>
))

storiesOf('Atom/Container/Background', module).add('plain', () => (
  <Background color="lightblue" fullscreen>
    <div style={{ width: '100%' }}>Test</div>
  </Background>
))
