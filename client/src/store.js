import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { alluser, userReducer } from './Components/redux/userReducer';

const reducer = combineReducers({
    user: userReducer,
    alluser: alluser

})
const middleware = [thunk];

const initialState = {}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;