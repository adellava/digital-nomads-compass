import { City } from 'models/City'

type CityFinderResultsListProps = {
  cityList: City[]
}

function CityFinderResultsList({ cityList }: CityFinderResultsListProps) {
  return (
    <ul>
      {cityList.map((city, i) => (
        <li key={i}>{city.matching_full_name}</li>
      ))}
    </ul>
  )
}

export default CityFinderResultsList
