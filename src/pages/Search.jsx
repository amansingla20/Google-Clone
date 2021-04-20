import './Search.css';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Search() {
    const [input ,setInput] = useState('');
    const history = useHistory();
    const search =(event)=>{
        event.preventDefault();
        history.push('/search')
    }
    return (
        <form className='search'>
            <div className="search-input">
                <SearchIcon className='search-inputIcon'/>
                <input value={input} onChange={(event)=> setInput(event.target.value)}/>
                <MicIcon />
            </div>
            <div className="search-buttons">
                <Button type='submit' onClick={search} variant = 'outlined'>Google Search</Button>
                <Button variant = 'outlined'>I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search 
