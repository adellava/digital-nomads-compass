import { useState } from 'react'
import getCity from 'services/getCity'
import { CitySearchResult } from 'models/CitySearchResult'
import { City } from 'models/City'

type useCityReturn = [
  (city: CitySearchResult) => void,
  () => void,
  City | null,
  string | null
]

function useCity(): useCityReturn {

  const [error, setError] = useState<string | null>(null)
  const [city, setCity] = useState<City | null>(null)

  const getTheCity = async (city: CitySearchResult) => {
    setError(null)
    const res = await getCity(city)
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

  return [getTheCity, dismissTheCity, city, error]
}

export default useCity