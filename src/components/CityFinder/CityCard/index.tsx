import './CityCard.scss'
import { City } from 'models/City'
import MeterBar from 'components/shared/MeterBar'

type CityCardProps = {
  city: City
  onCityDismissed: () => void
}

const InterestingScores = [
  'Housing',
  'Cost of Living',
  'Travel Connectivity',
  'Leisure & Culture',
  'Safety',
  'Healthcare',
  'Education',
  'Environmental Quality',
  'Taxation',
  'Internet Access',
  'Tolerance',
  'Outdoors',
]

function CityCard({ city, onCityDismissed }: CityCardProps) {
  return (
    <article className="CityCard" data-testid="CityCard">
      <div className="CityCard_header">
        <button
          className="CityCard_dismiss"
          data-testid="CityCard_dismiss"
          onClick={onCityDismissed}
        >
          ✕
        </button>
        <div className="CityCard_title">{city.name}</div>
        <div className="CityCard_subtitle">{city.continent}</div>
      </div>
      {city.scores
        .filter((score) => InterestingScores.includes(score.name))
        .map((score, i) => (
          <div className="CityCard_score" data-testid="CityCard_score" key={i}>
            <div>{score.name}</div>
            <div className="CityCard_scoreMeter">
              <MeterBar value={score.score_out_of_10} />
            </div>
          </div>
        ))}
    </article>
  )
}

export default CityCard
