import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ContextProvider } from './Context'
import App from './App';
import './styles.css';

const root = document.getElementById('root')

render(
      <ContextProvider>
            <Router>
                  <App />
            </Router>
      </ContextProvider>,
            root
)
