import { CityScore } from "./CityScore"

export type City = {
  continent: string,
  name: string,
  scores: CityScore[],
}