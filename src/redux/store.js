import rootReducer from "./rootReduser";

import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({reducer: rootReducer})

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)))
export default store;