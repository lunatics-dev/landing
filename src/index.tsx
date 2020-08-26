import React from 'react';
import ReactDOM from 'react-dom';

import App from '../src/containers/App';

import { IntlProvider } from 'react-intl';
import locale_en from './intl/en.json';
import locale_es from './intl/es.json';
import './index.css';

const data = {
  es: locale_es,
  en: locale_en,
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={data[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
