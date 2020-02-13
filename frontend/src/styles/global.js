import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    background: #f7f7f7;
    -webkit-font-smoothing: antialiased !important
  }

  body, input button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }

  button {
    cursor: pointer;
  }

`;
