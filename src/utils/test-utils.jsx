import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from '../redux/store'
import { ThemeContextProvider } from '../context/ThemeContext'

function customRender(
  ui,
  {
    preloadedState, // Allow initial state to be passed for testing
    store = setupStore(preloadedState), // Use rootReducer or specific slices
    ...options
  } = {}
) {
  function Wrapper({ children }) {
    // Wrap the UI in a Redux Provider with the test-specific store
    return (
      <Provider store={store}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </Provider>
    )
  }

  // Use the custom wrapper in the render method
  return { store, ...render(ui, { wrapper: Wrapper, ...options }) }
}

// Re-export everything from RTL and the overridden render method
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
