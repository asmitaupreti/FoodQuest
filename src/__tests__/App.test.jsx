import { act, render, screen, userEvent, waitFor } from '../utils/test-utils'
import { describe, expect, it } from 'vitest'
import App from '../App'
import Home from '../pages/Home'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import RecipeDetail from '../pages/RecipeDetail'

const initialTestState = {
  recipes: [],
  recipe: null,
  status: 'idle',
  error: null,
}

describe('Application test', () => {
  it('Application visit successful', () => {
    render(<App />)
    const name = screen.getByText(/flavor quest/i)
    const moto = screen.getByText(/get ready to dive into the realm of food/i)
    expect(name).toBeInTheDocument()
    expect(moto).toBeInTheDocument()
  })

  it('Theme change successful', () => {
    //load the app
    render(<App />)

    // Assuming light theme button is active

    const lightThemeButton = screen.getByRole('button', {
      name: 'Activate light theme',
    })

    const darkThemeButton = screen.getByRole('button', {
      name: 'Activate dark theme',
    })

    expect(lightThemeButton.firstChild).toHaveClass('text-orange-700')
    expect(darkThemeButton.firstChild).toHaveClass('text-white')

    //click the dark theme button  //
    act(() => {
      screen
        .getByRole('button', {
          name: /activate dark theme/i,
        })
        .click()
    })

    //check if the lightThemeButton button is now white
    expect(lightThemeButton.firstChild).toHaveClass('text-white')
    expect(darkThemeButton.firstChild).toHaveClass('text-orange-700')
  })

  it('Search by recipe called successfully', async () => {
    const { store } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      { preloadedState: initialTestState }
    )
    const searchBar = screen.getByRole('textbox')
    await userEvent.type(searchBar, 'burger')

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Search for recipe',
      })
    )
    expect(store.getState().recipes).toHaveLength(10)
  })

  it('Search by ingredient called successfully', async () => {
    const { store } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      { preloadedState: initialTestState }
    )
    const searchBar = screen.getByRole('textbox')
    await userEvent.type(searchBar, 'pasta')

    await userEvent.click(
      screen.getByRole('button', {
        name: /search by filter/i,
      })
    )

    expect(screen.getByRole('list')).toBeVisible()

    await userEvent.click(screen.getByTestId('filter-by-ingredient'))

    await userEvent.click(
      screen.getByRole('button', {
        name: 'Search for recipe',
      })
    )
    expect(store.getState().recipes).toHaveLength(9)
  })
  it('displays recipe details from the store', async () => {
    // Render RecipeDetail within a MemoryRouter to simulate routing context
    render(
      <MemoryRouter initialEntries={['/recipe/1']}>
        <Routes>
          <Route path="recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </MemoryRouter>,
      { preloadedState: initialTestState }
    )

    const image = await screen.findByRole('img', { name: /recipe-image/i })

    expect(image).toHaveAttribute(
      'src',
      'https://spoonacular.com/recipeImages/716429-556x370.jpg'
    )
  })
})
