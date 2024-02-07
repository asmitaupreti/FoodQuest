import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import RecipeListDisplay from './pages/RecipeListDisplay.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="recipe">
              <Route index element={<RecipeListDisplay />} />
              <Route path=":id" element={<RecipeDetail />} />
            </Route>
            {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  )
}

export default App
