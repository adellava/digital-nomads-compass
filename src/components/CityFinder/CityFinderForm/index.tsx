import { useRef, useCallback } from 'react'
import CityFinderInput from 'components/CityFinder/CityFinderInput'
import CityFinderInputWrapper from 'components/CityFinder/CityFinderInputWrapper'
import CityFinderResultsList from 'components/CityFinder/CityFinderResultsList'
import { CitySearchResult } from 'models/CitySearchResult'

type CityFinderFormProps = {
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  citySearchResultList: CitySearchResult[]
  onCitySelected: (city: CitySearchResult) => void
}

function CityFinderForm({
  onInputChange,
  citySearchResultList,
  onCitySelected,
}: CityFinderFormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  const handleCitySelected = useCallback(
    (city: CitySearchResult) => {
      if (formRef.current) formRef.current.reset()
      onCitySelected(city)
    },
    [onCitySelected]
  )

  return (
    <form ref={formRef}>
      <CityFinderInputWrapper>
        <>
          <CityFinderInput onInputChange={onInputChange} />
          <CityFinderResultsList
            cityList={citySearchResultList}
            onCitySelected={handleCitySelected}
          />
        </>
      </CityFinderInputWrapper>
    </form>
  )
}

export default CityFinderForm
