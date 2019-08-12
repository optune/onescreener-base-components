import React from 'react'

import { storiesOf } from '@storybook/react'
// TODO: add knobs for last Gigs story
import { action } from '@storybook/addon-actions'

import { Gigs, getGigs } from '../src/index.js'

storiesOf('Organism/Gigs', module)
  .add('Bandsintown', () => <Gigs slug={'skrillex'} api={'bandsintown'} getGigs={getGigs} />)
  .add('Gigatools', () => <Gigs slug={'ARADOShows'} api={'gigatools'} getGigs={getGigs} />)
  .add('Optune', () => <Gigs slug={'Ray-Douglas'} api={'optune'} getGigs={getGigs} />)
/*
  .add('Choose', () => (
    <Gigs slug={'Ray-Douglas'} api={'optune'} getGigs={getGigs} />
  ))
  */
