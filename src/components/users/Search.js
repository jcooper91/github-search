import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    // Globe here is just a test

    const [text, setText] = useState('')
    // const [globe, setGlobe] = useState('')

    const onChange = e => setText(e.target.value)

    // const onGlobe = e => setGlobe(e.target.value)

    const onSubmit = e => {
        if(text === '') {
            e.preventDefault()
            alertContext.setAlert('Please enter something....', 'light')
        } else {
            e.preventDefault()
            githubContext.searchUsers(text)
            setText('')
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
               <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange} />
               {/* <input type="text" name="globe" placeholder="Search Globe" value={globe} onChange={onGlobe} /> */}
               <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && (
                <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
            )}
        </div>
    )
}

export default Search
