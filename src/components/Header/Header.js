import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {nanoid} from "nanoid";

import './Header.css';

const Header = () => {
    const [listItems] = useState([
        {name: 'Home', id: nanoid(), route: '/posts'},
        {name: 'Add', id: nanoid(), route: '/posts/add'},
        {name: 'About', id: nanoid(), route: '/about'},
        {name: 'Contacts', id: nanoid(), route: '/contacts'},]
    );

    return (
        <header>
            <div className="HeaderInner Container">
                <NavLink
                    to='/'
                    className="Logo"
                >
                    <b>My Blog</b>
                </NavLink>
                <ul className="NavList">
                    {listItems.map(item => (
                        <li key={item.id} className="NavItem">
                            <NavLink
                                to={item.route}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};


export default Header;