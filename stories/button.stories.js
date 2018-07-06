import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src/index';

storiesOf('Buttons', module)
  .add('primary with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('primary with text and shadow', () => <Button shadow onClick={action('clicked')}>Hello Button</Button>)
  .add('secondary with text', () => <Button secondary onClick={action('clicked')}>Hello Button</Button>)
  .add('secondary with text and shadow', () => <Button secondary shadow onClick={action('clicked')}>Hello Button</Button>)
  .add('primary with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
