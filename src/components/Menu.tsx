import React, { useCallback } from 'react';
import { useState, useEffect, useRef } from 'react';
import  "../styles/Menu.css";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import smallLogo from "../images/logo.png"


const Menu:React.FC = () => {
    const ref = useRef<any>(null);

    // Handles the opening and closing of the menu
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = (e: any) => {
        e.preventDefault();
        {showMenu === false? setShowMenu(true) : setShowMenu(false)}
    }

    // Function used by the useEffect to handle the click outside the menu to closes the menu
    const onClickOutside = useCallback(() => {
        setShowMenu(false)
    },[])


    // Handles the click anywhere to close menu effect
    useEffect(() => {
        const handleClickOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true );
    
        return () => {
        document.removeEventListener('click', handleClickOutside, true)
        }
    }, [onClickOutside]);

    // menu options
    const menus = [
        {"option": "motivation", "link": "#motivation"},
        {"option": "memes", "link": "#memes"},
        {"option": "trailblazers", "link": "#trailblazers"},
        {"option": "about", "link": "#about"}
    ]
    return (
        <div className='menu'>
            <div className='menu__width'>
                <div className='menu__mobile'>
                    <div className='menu__mobileButton'>
                        <IconButton href='#login'>
                            <HomeIcon className='homeMenu' />
                        </IconButton>
                        <IconButton onClick={handleMenu}>
                            <MenuIcon className='homeMenu' />
                        </IconButton>
                    </div>
                    <div ref={ref} className={ showMenu? 'menu__mobileDown': "menu__mobileClose"}>
                        <div>
                            {menus.map((menu, index) => (
                                <MenuItem key={index} onClick={() => {setShowMenu(false)}}><a href={menu.link}><span className='menu__option'>{menu.option}</span></a></MenuItem>
                            ))}
                        </div>
                        <div className='close'>
                            <IconButton onClick={handleMenu}>
                                <CloseIcon className='closeIcon' />
                            </IconButton>
                        </div>
                        <img className='menu__logo' src={smallLogo} alt="" />
                    </div>
                </div>
                <ul className='menu__content'>
                    <li><a href='#login'><span className='menu__item'>sign in</span></a></li>
                    <li><a href='#motivation'><span className='menu__item'>motivation</span></a></li>
                    <li><a href='#memes'><span className='menu__item'>memes</span></a></li>
                    <li><a href='#trailblazers'><span className='menu__item'>trailblazers</span></a></li>
                    <li><a href='#about'><span className='menu__item'>about</span></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
