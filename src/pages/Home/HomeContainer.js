import { connect } from 'react-redux'
import { Home } from './Home'
import { getRepositories } from './HomeAction'

const mapStateToProps = state => ({
  reposData: state.getReposReducer.repositories
})

const mapDispatchToProps = dispatch => ({
  getRepositories: (data, successCallback, errorCallback, token) =>
    dispatch(getRepositories(data, successCallback, errorCallback, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
