import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import theme from '../../config/theme';

import { Home } from 'components/Home';

const AppPage: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

AppPage.propTypes = {
  children: PropTypes.node,
};

export default AppPage;
