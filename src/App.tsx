import { useCallback } from 'react'
import { CitySearchResult } from 'models/CitySearchResult'
import CityCard from 'components/CityFinder/CityCard'
import ErrorComponent from 'components/shared/Error'
import CityFinderForm from 'components/CityFinder/CityFinderForm'
import MainLayout from 'layouts/MainLayout'
import Loader from 'components/shared/Loader'
import useCity from 'hooks/useCity'
import useSearchResults from 'hooks/useSerchResults'

function App() {
  const [getACity, dismissTheCity, city, cityError, isLoadingACity] = useCity()
  const [
    searchACity,
    emptySearchResults,
    citySearchResultList,
    errorSearchResultList,
    isSearchingACity,
  ] = useSearchResults()

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      searchACity(event.target.value)
    },
    [searchACity]
  )

  const onCitySelected = useCallback(
    (city: CitySearchResult) => {
      emptySearchResults()
      getACity(city)
    },
    [emptySearchResults, getACity]
  )

  return (
    <MainLayout>
      <>
        <CityFinderForm
          onInputChange={onInputChange}
          citySearchResultList={citySearchResultList}
          onCitySelected={onCitySelected}
        />
        {errorSearchResultList && (
          <ErrorComponent message={errorSearchResultList} />
        )}
        {(isLoadingACity || isSearchingACity) && <Loader />}
        {city && <CityCard city={city} onCityDismissed={dismissTheCity} />}
        {cityError && <ErrorComponent message={cityError} />}
      </>
    </MainLayout>
  )
}

export default App
