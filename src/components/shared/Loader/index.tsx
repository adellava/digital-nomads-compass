import './Loader.scss'

function Loader() {
  return (
    <div className="Loader" data-testid="Loader">
      <div className="Loader_ring"></div>
      <div className="Loader_text">Loading...</div>
    </div>
  )
}

export default Loader
