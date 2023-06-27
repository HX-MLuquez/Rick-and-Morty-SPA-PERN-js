import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

/*
TODO: versión 18 --> createRoot(rootElement)
import ReactDOM from 'react-dom';
import { unstable_createRoot as createRoot } from 'react-dom'; // Nueva API en React 18

import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

*Utiliza createRoot en lugar de render para habilitar la nueva API de renderizado en React 18
const root = createRoot(rootElement);

*Renderiza el componente App dentro del elemento root
root.render(<App />);
*/
