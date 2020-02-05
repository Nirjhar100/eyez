import lifecardReducer from './lifecardReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    lifecard : lifecardReducer
});

export default rootReducer;