import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import { Fragment } from 'react';

export const Spinner = () => (
  <Fragment>
    <img src={spinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
  </Fragment>
);
