import { useState } from 'react'
import searchACity from 'services/searchACity'
import { CitySearchResult } from 'models/CitySearchResult'

type useSerchResultsReturn = [
  (city: string) => void,
  () => void,
  CitySearchResult[],
  string | null
]

function useSerchResults(): useSerchResultsReturn {
  const [citySearchResultList, setCitySearchResultList] = useState<
    CitySearchResult[]
  >([])
  const [error, setError] = useState<string | null>(null)

  const search = async (city: string) => {
    if (!city) {
      emptySearchResults()
      setError(null)
      return
    }
    const res = await searchACity(city)
    if (res instanceof Error) {
      setError(res.message)
      emptySearchResults()
      return
    }

    if (res.length === 0) {
      setError('No results found')
      emptySearchResults()
      return
    }
    setError(null)
    setCitySearchResultList(res)
  }

  const emptySearchResults = () => {
    setCitySearchResultList([])
  }


  return [search, emptySearchResults, citySearchResultList, error];
}

export default useSerchResults