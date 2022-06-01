import { useState } from 'react'
import searchACity from 'services/searchACity'
import { CitySearchResult } from 'models/CitySearchResult'

type useSerchResultsReturn = [
  (city: string) => void,
  () => void,
  CitySearchResult[],
  string | null,
  boolean
]

function useSerchResults(): useSerchResultsReturn {
  const [citySearchResultList, setCitySearchResultList] = useState<
    CitySearchResult[]
  >([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const search = async (city: string) => {
    if (!city) {
      emptySearchResults()
      setError(null)
      return
    }
    setIsLoading(true)
    const res = await searchACity(city)
    setIsLoading(false)
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


  return [search, emptySearchResults, citySearchResultList, error, isLoading];
}

export default useSerchResults