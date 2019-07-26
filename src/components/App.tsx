import React, { useEffect, useState } from 'react'
import { TrendsService } from '../services/TrendsService'
import { Trend } from '../services/models'

export interface AppProps {
  trendsService: TrendsService
}

export const App: React.FC<AppProps> = ({trendsService}) => {
  const [trends, setTrends] = useState<Trend[]>([])

  useEffect(() => {
    trendsService.fetchAll().then(setTrends)
  }, [trendsService])

  return <>
    <ul>
      {trends.map(trend => <li>{trend.repository.name}</li>)}

    </ul>
  </>
}
