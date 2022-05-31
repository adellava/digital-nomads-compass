import { CitySearchResult } from 'models/CitySearchResult'
import './CityFinderResultsList.scss'

type CityFinderResultsListProps = {
  cityList: CitySearchResult[]
  onCitySelected: (city: CitySearchResult) => void
}

function CityFinderResultsList({
  cityList,
  onCitySelected,
}: CityFinderResultsListProps) {
  if (cityList.length === 0) return <></>

  return (
    <ul data-testid="CityFinderResultsList" className="CityFinderResultsList">
      {cityList.map((city, i) => (
        <li
          data-testid="CityFinderResultsList_item"
          className="CityFinderResultsList_item"
          key={i}
          onClick={() => onCitySelected(city)}
        >
          {city.matching_full_name}
        </li>
      ))}
    </ul>
  )
}

export default CityFinderResultsList
