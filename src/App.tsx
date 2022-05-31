import { useState } from 'react'
import CityCard from 'components/CityFinder/CityCard'
import ErrorComponent from 'components/shared/Error'
import searchACity from 'services/searchACity'
import getCity from 'services/getCity'
import { CitySearchResult } from 'models/CitySearchResult'
import MainLayout from 'layouts/MainLayout'
import { City } from 'models/City'
import CityFinderForm from 'components/CityFinder/CityFinderForm'

function App() {
  const [citySearchResultList, setCitySearchResultList] = useState<
    CitySearchResult[]
  >([])
  const [city, setCity] = useState<City | null>(null)
  const [error, setError] = useState<string | null>(null)

  const search = async (city: string) => {
    if (!city) {
      setCitySearchResultList([])
      setError(null)
      return
    }
    const res = await searchACity(city)
    if (res instanceof Error) {
      setError(res.message)
      setCitySearchResultList([])
      return
    }
    setCitySearchResultList(res)
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    search(event.target.value)
  }

  const onCitySelected = async (city: CitySearchResult) => {
    setCitySearchResultList([])
    const res = await getCity(city)
    if (res instanceof Error) {
      setError(res.message)
      return
    }
    setCity(res)
  }

  const onCityDismissed = () => {
    setCity(null)
  }

  return (
    <MainLayout>
      <>
        <CityFinderForm
          onInputChange={onInputChange}
          citySearchResultList={citySearchResultList}
          onCitySelected={onCitySelected}
        />
        {error && <ErrorComponent message={error} />}
        {city && <CityCard city={city} onCityDismissed={onCityDismissed} />}
      </>
    </MainLayout>
  )
}

export default App
