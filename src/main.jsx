import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ResultsContextProvider } from './context/resultsContext'
import { UserContextProvider } from './context/userContext'
import { DataContextProvider } from './context/dataContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <DataContextProvider>
          <ResultsContextProvider>
            <App />
          </ResultsContextProvider>
        </DataContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
