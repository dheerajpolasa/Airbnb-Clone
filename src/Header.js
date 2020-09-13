import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';

import {Avatar, Avater} from '@material-ui/core'
function Header() {
    return (
        <div className='header'>
            <img className="header__icon" src="https://i.pinimg.com/originals/56/00/dd/5600ddbbc680a4a100e62077d90763eb.jpg"/>

            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )   
}

export default Header