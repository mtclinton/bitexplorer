import * as React from "react";
import * as ReactDOM from 'react-dom';
import AppRouter from './router';

import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
