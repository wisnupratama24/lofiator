import {combineReducers} from 'redux'
import { pageInitReducer } from '~/components/pageInit/reducer'


export const rootReducer = combineReducers({
  pageInit : pageInitReducer
})

export type RootState = ReturnType<typeof rootReducer>
