import './CityFinderInputWrapper.scss'

type CityFinderInputWrapperProps = {
  children: JSX.Element
}

function CityFinderInputWrapper({ children }: CityFinderInputWrapperProps) {
  return <div className="CityFinderInputWrapper">{children}</div>
}

export default CityFinderInputWrapper
