import {
  asyncActionTypeCreator,
  asyncActionCreator
} from '../../utils/reduxActionHelper'
import { GET_REPOS_URL } from '../../utils/apiEndpoints'

const getReposActionType = asyncActionTypeCreator('GET_REPOS')
const getReposAction = asyncActionCreator(getReposActionType)

const getRepositories = (userName, query, successCallback, errorCallback) => {
  const endpoint = GET_REPOS_URL.replace('<USERNAME>', userName)
  const axiosConfig = {
    url: `${endpoint}?${query}`,
    method: 'get'
  }
  return getReposAction.action(axiosConfig, successCallback, errorCallback)
}

export { getReposActionType, getRepositories }
