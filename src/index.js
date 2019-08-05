import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Calendar from './components/Calendar';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Calendar />
  </Provider>,
  document.getElementById('root')
)

