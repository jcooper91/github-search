import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({user:{login, html_url, avatar_url}}) => {
    return (
        <div className="card text-center">
            <img className="round-img" src={avatar_url} alt='' style={{ width: '60px' }} />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
}

export default UserItem
