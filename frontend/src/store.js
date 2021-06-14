import { createStore, combineReducers, applyMiddleware } from 'redux';
{/*combinedReducers : later on multiple reducers, for different parts of the application, and take all of them and combine them into one reducer, and take this reducer and apply it to the store */}
import thunk from 'redux-thunk'

{/*redux-thunk allows us to make asynchronous request from our action creators
just like a middleware  */}
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combinedReducers( { } )
{/*need our initial state */}

const initialState = { }

const middlware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middlware)))

export default store
{/*next step is to import store in index.js, provider will make it availalbe to all components in app */}


