import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Chat from '~/components/Chat';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Chat />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
