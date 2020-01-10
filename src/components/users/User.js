import React, { useContext, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {

    const githubContext = useContext(GithubContext)

    const { getUser, getUserRepos, user, repos } = githubContext

    const { 
        login,
        avatar_url,
        url,
        html_url,
        followers_url,
        following_url,
        gists_url,
        repos_url,
        name,
        company,
        blog,
        location,
        email,
        hireable,
        bio,
        public_repos,
        public_gists,
        followers,
        following
     } = user 

    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <Link to={'/'} className="btn btn-light">Back to Search</Link>
            Heriable: {' '}
            {hireable ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-cross text-danger"></i>)}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} className="round-img" style={{width:'150px'}} alt=""/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && (
                        <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                        </Fragment>
                    )}
                <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>    
                <ul>
                    <li>
                        {login && (
                            <Fragment>
                                <strong>Username:</strong> {login}
                            </Fragment>
                        )}
                    </li>
                    <li>
                        {company && (
                            <Fragment>
                                <strong>Company:</strong> {company}
                            </Fragment>
                        )}
                    </li>
                    <li>
                        {blog && (
                            <Fragment>
                                <strong>Website</strong> {blog}
                            </Fragment>
                        )}
                    </li>
                </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-light">Public Gists: {public_gists}</div>
            </div>
        <Repos repos={repos} />
        </Fragment>
    );
}

export default User
