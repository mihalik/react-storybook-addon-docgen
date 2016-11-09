import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import docs from '../src';

import Button from './Button';
import ButtonDocs from './ButtonDocs';
import ButtonSimple from './ButtonSimple';

storiesOf('ButtonDocs')
  .addDecorator(docs({}))
  .add(
    'simple usage',
    () => <ButtonDocs label="The Button" onClick={action('onClick')} />,
  )
  .add(
    'another usage',
    () => <ButtonDocs label="Another Button" onClick={action('another onClick')} />,
  );

storiesOf('Button')
  .addDecorator(docs({}))
  .add(
    'simple usage',
    () => <Button label="The Button" onClick={action('onClick')} />,
  );

storiesOf('ButtonSimple')
  .addDecorator(docs({}))
  .add(
    'simple usage',
    () => <ButtonSimple label="The Button" onClick={action('onClick')} />,
  );
