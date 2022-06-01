import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from 'App'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import mocks from 'mocks'

const server = setupServer(
  rest.get('https://api.teleport.org/api/cities', (_, res, ctx) => {
    return res(ctx.json(mocks.cities))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('App looking for a City', () => {
  test('renders Digital Nomad Compass as a title', () => {
    render(<App />)
    const linkElement = screen.getByText(/Digital Nomad Compass/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('should render a list of results when the search is successful', async () => {
    render(<App />)

    const input = screen.getByTestId('CityFinderInput')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'Roma' } })

    await waitFor(() => {
      expect(screen.getAllByTestId('CityFinderResultsList_item').length).toBe(
        25
      )
    })
    expect(
      screen.getAllByTestId('CityFinderResultsList_item')[0]
    ).toHaveTextContent('Rome, Latium, Italy (roma)')

    expect(
      screen.getAllByTestId('CityFinderResultsList_item')[1]
    ).toHaveTextContent('Roman, Neamţ, Romania')

    expect(
      screen.getAllByTestId('CityFinderResultsList_item')[24]
    ).toHaveTextContent('Iaşi, Iaşi, Romania')
  })

  it('should render an error when the search is unsuccessful', async () => {
    server.use(
      rest.get('https://api.teleport.org/api/cities', (_, res, ctx) => {
        return res(ctx.status(500))
      })
    )
    render(<App />)

    const input = screen.getByTestId('CityFinderInput')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'Roma' } })

    await waitFor(() => {
      expect(screen.getByTestId('Error')).toBeInTheDocument()
    })

    const error = screen.getByTestId('Error')
    expect(error).toHaveTextContent('Error in fetching cities')
  })
})
