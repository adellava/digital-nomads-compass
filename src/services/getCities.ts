import { City } from 'models/City'
import api from 'services/api'

// const sleep = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds));
type CitiesResponse = {
  count: number,
  _embedded: {
    "city:search-results": City[]
  }
}

const getCities = async (query: string) => {
  try {
    const urlParams = new URLSearchParams({ "search": query });
    const res: CitiesResponse = await api.get<CitiesResponse>(`https://api.teleport.org/api/cities/?${urlParams}`)
    // await sleep(1000) // just to simulate the time needed for a http request
    return res._embedded["city:search-results"];
  } catch {
    return new Error('Error in fetching cities');
  }
}

export default getCities