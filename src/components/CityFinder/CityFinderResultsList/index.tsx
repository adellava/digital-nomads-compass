import { City } from 'models/City'
import './CityFinderResultsList.scss'

type CityFinderResultsListProps = {
  cityList: City[]
}

function CityFinderResultsList({ cityList }: CityFinderResultsListProps) {
  if (cityList.length === 0) return <></>

  return (
    <ul data-testid="CityFinderResultsList" className="CityFinderResultsList">
      {cityList.map((city, i) => (
        <li
          data-testid="CityFinderResultsList_item"
          className="CityFinderResultsList_item"
          key={i}
        >
          {city.matching_full_name}
        </li>
      ))}
    </ul>
  )
}

export default CityFinderResultsList
