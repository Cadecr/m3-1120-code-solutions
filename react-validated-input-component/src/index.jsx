import React from 'react';
import ReactDOM from 'react-dom';
import { ValidatedInput } from './validated-input';

const element = (
  <div>
    <ValidatedInput />
  </div>
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);
