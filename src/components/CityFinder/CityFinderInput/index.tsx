import { debounce } from 'lodash'
import './CityFinderInput.scss'

type CityFinderInputProps = {
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
}

function CityFinderInput({ onInputChange }: CityFinderInputProps) {
  const debouncedOnInputChange = debounce(onInputChange, 500)
  return (
    <input
      type="search"
      data-testid="CityFinderInput"
      className="CityFinderInput"
      onChange={debouncedOnInputChange}
      placeholder="look for a city..."
    />
  )
}

export default CityFinderInput
