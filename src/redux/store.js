import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './slice/recipeSlice.js'

// const rootReducer = combineReducers({
//   defaultState, // key name same as the carefully renamed default export
//   firstState: firstNamedReducer, // specific key name instead of the variable name
//   secondState, // key name same as the carefully renamed named export
// })
const store = configureStore({
  reducer: recipeReducer, // Combine all your reducers here
})

export function setupStore(preloadedState) {
  return configureStore({
    reducer: recipeReducer,
    preloadedState,
  })
}

export default store
