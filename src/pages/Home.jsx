import './Home.css';
import React from 'react'
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className='home'>
            <div className="home-header">
                <div className="home-headerLeft">
                    <Link to ='/about'>About</Link>
                    <Link to ='/store'>Store</Link>
                </div>
                <div className="home-headerRight">
                    <Link to ='/gmail'>Gmail</Link>
                    <Link to ='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar src = 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                </div>
            </div>
            <div className="home-body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=""/>
            </div>
            <div className="home-inputContainer">
                <Search hideButtons />
            </div>
        </div>
    )
}

export default Home
