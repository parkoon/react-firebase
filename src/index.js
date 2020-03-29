import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { DatePicker } from 'antd'

import configureStore from './store'

import App from './App'

import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>

    <DatePicker />
  </React.StrictMode>,
  document.getElementById('root')
)
