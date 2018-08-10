import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {
  Button,
  CenterContainer,
  ContentContainer,
  AnchorButton,
} from '../src/index.js'

storiesOf('Atom/Container/Center', module)
  .add('Centered elements', () => (
    <div>
      <CenterContainer>
        <Button>Left</Button>
        <p>
          Text Lorem ipsum whatever you like to read here it should be
          reaaaaally long and have <a href="#">Links</a> and such.<br />And also
          Linebreaks
        </p>
        <Button>Right</Button>
      </CenterContainer>
      <CenterContainer>
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
          reaaaaally long and have <a href="#">Links</a> and such.<br />And also
          Linebreaks
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
      long and have <AnchorButton href="#">Links</AnchorButton> and such.<br />And
      also Linebreaks
    </p>
    <Button>Bottom</Button>
  </ContentContainer>
))
