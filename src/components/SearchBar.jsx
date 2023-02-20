import movieData from '../utils/movies';

const SearchBar = ({search, setSearch, maxLength, setMaxLength, direction, setDirection, newMovies, setNewMovies}) => {
     
   
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }


    const sortMovies = () => {
    
        if(direction === 'Ascending Length') {

            movieData.sort((a, b) => a.length - b.length);  //ascending order

            setDirection('Descending Length');

        } else {

            movieData.sort((a, b) => b.length - a.length);  //descending order

            setDirection('Ascending Length');
        }

        setNewMovies(movieData); //set to sorted movied
    }


    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={sortMovies}>Click to Sort Movies by:</button> <small>{direction}</small>
    </>
}

export default SearchBar;