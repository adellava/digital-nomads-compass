import { City } from 'models/City'
import './CityFinderResultsList.scss'

type CityFinderResultsListProps = {
  cityList: City[]
}

function CityFinderResultsList({ cityList }: CityFinderResultsListProps) {

  if(cityList.length === 0) return <></>
  
  return (
    <ul className='CityFinderResultsList'>
      {cityList.map((city, i) => (
        <li className='CityFinderResultsList_item' key={i}>{city.matching_full_name}</li>
      ))}
    </ul>
  )
}

export default CityFinderResultsList
