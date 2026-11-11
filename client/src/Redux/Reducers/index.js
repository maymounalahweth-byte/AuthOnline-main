import {combineReducers} from 'redux'
import UsersReducer from './UsersReducer'
import ErrorsReducer from './ErrorsReducer'

const rootReducer = combineReducers({UsersReducer, ErrorsReducer})

export default rootReducer