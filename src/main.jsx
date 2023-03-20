import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import { Provider, connect } from 'react-redux'
import { configStore } from './Store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={configStore()}>
    <App />
    </Provider>
  </React.StrictMode>,
)
