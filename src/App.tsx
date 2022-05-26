import { useState } from 'react'
import Header from 'components/shared/Header'
import CityFinderInput from 'components/CityFinder/CityFinderInput'
import CityFinderResultsList from 'components/CityFinder/CityFinderResultsList'
import getCities from 'services/getCities'
import { City } from 'models/City'

function App() {
  const [cityList, setCityList] = useState<City[]>([])

  const fetchCities = async (city: string) => {
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
    <div>
      <Header />
      <CityFinderInput onInputChange={onInputChange} />
      <CityFinderResultsList cityList={cityList} />
    </div>
  )
}

export default App
