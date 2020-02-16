import lifecardReducer from './lifecardReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    lifecard : lifecardReducer,
    firestore : firestoreReducer
});

export default rootReducer;