import { debounce } from 'lodash'

type CityFinderInputProps = {
  onInputChange: React.ChangeEventHandler<HTMLInputElement>
}

function CityFinderInput({ onInputChange }: CityFinderInputProps) {
  const debouncedOnInputChange = debounce(onInputChange, 500)
  return <input onChange={debouncedOnInputChange} />
}

export default CityFinderInput
