import React, { useEffect } from 'react'
import { TrendsService } from '../services/TrendsService'

export interface AppProps {
  trendsService: TrendsService
}

export const App: React.FC<AppProps> = () => {
  useEffect(() => {

  }, [])

  return <h1>hello world</h1>
};
