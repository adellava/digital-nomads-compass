import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import App from 'App'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mocks from 'mocks'

const server = setupServer(
  rest.get('https://api.teleport.org/api/cities', (_, res, ctx) => {
    return res(ctx.json(mocks.cities))
  }),
  rest.get(
    'https://api.teleport.org/api/cities/geonameid:3169070/',
    (_, res, ctx) => {
      return res(ctx.json(mocks.geoname))
    }
  ),
  rest.get(
    'https://api.teleport.org/api/urban_areas/slug:rome/',
    (_, res, ctx) => {
      return res(ctx.json(mocks.urbanarea))
    }
  ),
  rest.get(
    'https://api.teleport.org/api/urban_areas/slug:rome/scores/',
    (_, res, ctx) => {
      return res(ctx.json(mocks.scores))
    }
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App getting a City', () => {
  it('should render a city scores when a search result is selected and dismissed on user comand', async () => {
    render(<App />)

    const input = screen.getByTestId('CityFinderInput')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'Roma' } })

    await waitFor(() => {
      expect(screen.getAllByTestId('CityFinderResultsList_item').length).toBe(
        25
      )
    })

    const firstResult = screen.getAllByTestId('CityFinderResultsList_item')[0]
    expect(firstResult).toBeInTheDocument()

    act(() => {
      firstResult.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    await waitFor(() => {
      expect(screen.getByTestId('CityCard')).toBeInTheDocument()
    })

    const card = screen.getByTestId('CityCard')
    expect(card).toHaveTextContent('Rome')
    expect(card).toHaveTextContent('Europe')

    const scores = screen.getAllByTestId('CityCard_score')
    expect(scores.length).toBe(12)
    expect(scores[0]).toHaveTextContent('Housing')
    expect(scores[1]).toHaveTextContent('Cost of Living')
    expect(scores[1]).toHaveTextContent('Cost of Living')
    expect(scores[11]).toHaveTextContent('Outdoors')

    const dismissButton = screen.getByTestId('CityCard_dismiss')
    act(() => {
      dismissButton.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
    expect(card).not.toBeInTheDocument()
  })

  it('should render an error when the procedure is unsuccessful', async () => {
    server.use(
      rest.get(
        'https://api.teleport.org/api/urban_areas/slug:rome/scores/',
        (_, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )
    render(<App />)

    const input = screen.getByTestId('CityFinderInput')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'Roma' } })

    await waitFor(() => {
      expect(screen.getAllByTestId('CityFinderResultsList_item').length).toBe(
        25
      )
    })

    const firstResult = screen.getAllByTestId('CityFinderResultsList_item')[0]
    expect(firstResult).toBeInTheDocument()

    act(() => {
      firstResult.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    await waitFor(() => {
      expect(screen.getByTestId('Error')).toBeInTheDocument()
    })

    const error = screen.getByTestId('Error')
    expect(error).toHaveTextContent('City not found')
  })
})
