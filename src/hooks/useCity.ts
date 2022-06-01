import { useState } from 'react'
import getCity from 'services/getCity'
import { CitySearchResult } from 'models/CitySearchResult'
import { City } from 'models/City'

type useCityReturn = [
  (city: CitySearchResult) => void,
  () => void,
  City | null,
  string | null,
  boolean
]

function useCity(): useCityReturn {

  const [error, setError] = useState<string | null>(null)
  const [city, setCity] = useState<City | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getTheCity = async (city: CitySearchResult) => {
    setError(null)
    setIsLoading(true)
    const res = await getCity(city)
    setIsLoading(false)
    if (res instanceof Error) {
      setError(res.message)
      return
    }
    setCity(res)
  }

  const dismissTheCity = () => {
    setError(null)
    setCity(null)
  }

  return [getTheCity, dismissTheCity, city, error, isLoading]
}

export default useCity