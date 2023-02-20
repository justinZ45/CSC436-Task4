import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [newMovies, setNewMovies] = useState([]); //new variable to hold names of sorted movies
  const [direction, setDirection] = useState('Ascending Length'); //variable for direction of movie sorting


  useEffect(() => {

    setMovies(movieData.filter(movie => {
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
         ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
     }));

     
  }, [search, maxLength, direction, newMovies]);

  

  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        newMovies = {newMovies} 
        setNewMovies = {setNewMovies}
        direction = {direction}
        setDirection = {setDirection}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App