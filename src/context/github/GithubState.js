import React, { useReducer } from 'react'
import axios from 'axios'
import githubReducer from './githubReducer'
import GithubContext from './githubContext'
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER, GET_REPOS } from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false 
    }

    const githubClientId = '777d8b30f349d8f565b3'
    const githubClientSecret = '85ab858605c83a36e7a97c8e75ba7fa826a40d93'

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    const getUser = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    const getUserRepos = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }

    const setLoading = () => dispatch({ type: SET_LOADING })

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                getUser,
                getUserRepos,
                searchUsers,
                clearUsers
            }}
        >
        {props.children}
        </GithubContext.Provider>
    )

}

export default GithubState
