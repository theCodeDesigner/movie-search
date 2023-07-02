import React from 'react'
import "./Movie.css"
import imdbSvg from "./icons/imdb.svg"
import metascoreSvg from "./icons/metascore.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCalendar, faClapperboard,faPeopleGroup} from '@fortawesome/free-solid-svg-icons'

const Movie = ({poster,title,runtime,year,actors,genre,imdb,rating,metascore,plot}) => {

    const openWebsite = () => {
        if(imdb){
            window.open(`https://www.imdb.com/title/${imdb}`, '_blank');
        }else if(!imdb){
            alert("There is no imdb link")
        }
        
      };

  return (
    <div className='movie-container'>

        <div className="poster-container">
            <img className='poster' src={poster}alt="" />
        </div>

        <div className="info-container">
            <h3 className='title'>{title}</h3>
            <div className='divider'></div>
            

            <div className='info-container1'>
                <p className='runtime'> <FontAwesomeIcon icon={faClock} /> {runtime}</p>
                <p className='year'> <FontAwesomeIcon icon={faCalendar} /> {year}</p>
                <p className='genre'><FontAwesomeIcon icon={faClapperboard} /> {genre}</p>
            </div>

            <p className='actors'><FontAwesomeIcon icon={faPeopleGroup} /> Cast: {actors}</p>
            
            
            <p className='plot'>
                <div className="line-div"></div>
                <div>
                    <span className='bold'>MOVIE INFO </span><br />
                    {plot}
                </div>
            </p>

            

            <div className='ratings'>
                <p className='rating'>
                <img className='imdb-img' src={imdbSvg} alt="" />
                {rating}/10</p>
                <p className='metascore'>
                <img className="metascore-img"src={metascoreSvg} alt="" />    
                {metascore}%</p>
            </div>
            <button className='imdbBtn' onClick={openWebsite} >Check On IMDB</button>
        </div>

    </div>
  )
}

export default Movie