import promiseState from '../../utils/reduxReducerHelper'
import { getReposActionType } from './HomeAction'

const initialState = {
  repositories: {
    ...promiseState(false, false, false, [])
  }
}

const getReposReducer = (state = initialState, action) => {
  switch (action.type) {
    case getReposActionType.pending:
      return Object.assign({}, state, {
        repositories: {
          ...promiseState(true, false, false, [])
        }
      })
    case getReposActionType.fulfilled:
      return Object.assign({}, state, {
        repositories: {
          ...promiseState(false, true, false, action.payload)
        }
      })
    case getReposActionType.rejected:
      return Object.assign({}, state, {
        repositories: {
          ...promiseState(false, false, true, [])
        }
      })
    default:
      return state
  }
}

export default getReposReducer
