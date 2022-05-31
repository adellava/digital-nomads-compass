import { CitySearchResult } from 'models/CitySearchResult'
import { CityScore } from 'models/CityScore'
import { City } from 'models/City'
import api from 'services/api'

type GeonameResponse = {
  _links: {
    'city:urban_area': {
      href: string,
    }
  }
}

type UrbanAreaResponse = {
  _links: {
    'ua:scores': {
      href: string,
    }
  },
  continent: string,
  name: string,
}

type ScoresResponse = {
  categories: CityScore[]
}

const getCity = async (aCity: CitySearchResult) => {
  try {
    const geonameRes: GeonameResponse = await api.get<GeonameResponse>(aCity._links["city:item"].href)
    const urbanAreaRes: UrbanAreaResponse = await api.get<UrbanAreaResponse>(geonameRes._links["city:urban_area"].href)
    const scores: ScoresResponse = await api.get<ScoresResponse>(urbanAreaRes._links["ua:scores"].href)
    const result: City = {
      continent: urbanAreaRes.continent,
      name: urbanAreaRes.name,
      scores: scores.categories
    }
    return result
  } catch {
    return new Error('Error in fetching scores');
  }
}

export default getCity