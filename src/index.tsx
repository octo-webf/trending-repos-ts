import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './components/App'
import { HttpClient } from './services/HttpClient'
import { TrendsService } from './services/TrendsService'

const httpClient: HttpClient = {
  get<T>(url: string): Promise<T> {
    return fetch(url).then(response => response.json() as Promise<T>)
  }

}

ReactDOM.render(<App trendsService={new TrendsService(httpClient)}/>, document.getElementById('root'))
