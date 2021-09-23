import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { TodoState, todoReducer } from './todo'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: [],
  // whitelist: ['userState', 'settings']
}

// const userPersistConfig = {
//   key: 'userState',
//   storage: AsyncStorage,
//   //   blacklist: ['isLoggingIn', 'isAuthenticated', 'loading'],
// }

export type MainState = {
  todos: TodoState
}

const rootReducer = combineReducers({
  todos: todoReducer,
})

export default persistReducer<MainState>(persistConfig, rootReducer)
