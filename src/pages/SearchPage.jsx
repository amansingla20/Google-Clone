import './SearchPage.css';
import React from 'react'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import {Link} from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
   //LIVE API CALL...
     const { data } =useGoogleSearch(term);

    //Mock API call...
   // const data = Response;
    console.log(data);
    return (
        <div className ='searchPage'>
            <div className="searchPage-header">
                <Link to='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" className="searchPage-logo"/>
                </Link>
                <div className="searchPage-headerBody">
                    <Search hideButtons />
                <div className="searchPage-options">
                    <div className="searchPage-optionsLeft">
                        <div className="searchPage-option">
                            <SearchIcon />
                            <Link to='/all'>All</Link>
                        </div>
                        <div className="searchPage-option">
                            <DescriptionIcon />
                            <Link to='/news'>News</Link>
                        </div>
                        <div className="searchPage-option">
                            <ImageIcon />
                            <Link to='/images'>Images</Link>
                        </div>
                        <div className="searchPage-option">
                            <LocalOfferIcon />
                            <Link to='/shopping'>Shopping</Link>
                        </div>
                        <div className="searchPage-option">
                            <RoomIcon />
                            <Link to='/maps'>Maps</Link>
                        </div>
                        <div className="searchPage-option">
                            <MoreVertIcon />
                            <Link to='/more'>More</Link>
                        </div>
                    </div>
                    <div className="searchPage-optionsRight">
                    <div className="searchPage-option">
                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className="searchPage-option">
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {term && (
                <div className="searchPage-results">
                    <p className="searchPage-resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}seconds) for {term}
                    </p>

                    {data?.items.map(item=>(
                        <div className='searchPage-result'>
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage-resultImage' src={
                                        item.pagemap?.cse_image[0]?.src} alt=''/>
                                )}
                                {item.displayLink}
                            </a>
                            <a href={item.link} className='searchPage-resultTitle'>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage-resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}

export default SearchPage
