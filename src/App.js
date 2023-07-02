import { useState, useEffect, useRef } from 'react';
import './App.css';
import axios from 'axios';
import Movie from './components/Movie';
import Sorry from './components/Sorry';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (apiKey) {
      axios
        .get(apiKey)
        .then((res) => setMovies([res.data]))
        .catch((error) => console.error(error));
    }
  }, [apiKey]);

  const getMovies = () => {
    const inputText = input;
    const newApiKey = `https://omdbapi.com/?t=${inputText}&apikey=739e9edc`;
    setApiKey(newApiKey);
    setInput('');
    inputRef.current.value = ''; // Clearing the input field
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      getMovies();
    }
  };

  return (
    <div className="App">
      
      <div className="upper-section">
        <div className="heading">
          <h1>Movie Searching App</h1>
        </div>
        <div className="search">
          <input className='input-field'
            type="text"
            placeholder="🎞️ Search for a movie..."
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            ref={inputRef}
          />
          <button className='btn-movie' onClick={getMovies}>Search</button>
        </div>
      </div>

      <div className='down-section'>
        {movies.map((e, idx) => {
          if (e.Response === 'True') {
            const {
              Poster,
              Title,
              Runtime,
              Year,
              Actors,
              Genre,
              imdbID,
              imdbRating,
              Metascore,
              Plot
            } = e;

            return (
              <Movie
                key={idx}
                poster={Poster !== 'N/A' ? Poster : undefined}
                title={Title !== 'N/A' ? Title : undefined}
                runtime={Runtime !== 'N/A' ? Runtime : undefined}
                year={Year !== 'N/A' ? Year : undefined}
                actors={Actors !== 'N/A' ? Actors : undefined}
                genre={Genre !== 'N/A' ? Genre : undefined}
                imdb={imdbID !== 'N/A' ? imdbID : undefined}
                rating={imdbRating !== 'N/A' ? imdbRating : undefined}
                metascore={Metascore !== 'N/A' ? Metascore : undefined}
                plot={Plot !== 'N/A' ? Plot : undefined}
              />
            );
          } else if (e.Response === 'False') {
            return <Sorry />;
          }
        })}
      </div>
    </div>
  );
}

export default App;