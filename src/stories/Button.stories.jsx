import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('default', () => (
    <Button>Hello, World!</Button>
  ));
