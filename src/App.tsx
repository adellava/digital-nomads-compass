import { useState } from 'react'
import CityFinderInput from 'components/CityFinder/CityFinderInput'
import CityFinderInputWrapper from 'components/CityFinder/CityFinderInputWrapper'
import CityFinderResultsList from 'components/CityFinder/CityFinderResultsList'
import getCities from 'services/getCities'
import { City } from 'models/City'
import MainLayout from 'layouts/MainLayout'

function App() {
  const [cityList, setCityList] = useState<City[]>([])

  const fetchCities = async (city: string) => {
    if (!city) {
      setCityList([])
      return
    }
    const res = await getCities(city)
    if (res instanceof Error) {
      console.error(res)
      return
    }
    setCityList(res)
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fetchCities(event.target.value)
  }

  return (
    <MainLayout>
      <CityFinderInputWrapper>
        <>
          <CityFinderInput onInputChange={onInputChange} />
          <CityFinderResultsList cityList={cityList} />
        </>
      </CityFinderInputWrapper>
    </MainLayout>
  )
}

export default App
