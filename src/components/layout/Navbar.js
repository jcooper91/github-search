import React from 'react';

const Navbar = ({title, icon}) => {
    return (
        <nav className="navbar bg-primary">
            <h1><i className={icon}></i>  {title}</h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "Github Search",
    icon: "fab fa-github"
}


export default Navbar;
