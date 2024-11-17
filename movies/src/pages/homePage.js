import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'


const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const favorites = movies.filter(m => m.favorite)
  const watchlater = movies.filter(m => m.watchlater)
  localStorage.setItem('favorites', JSON.stringify(favorites))
 // localStorage.setItem('watchlaters', JSON.stringify(watchlaters))

 
  const addToFavorites = (movieId) => true 
  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
          <AddToFavoritesIcon movie={movie} />
          <AddToPlaylistIcon movie={movie} />
          </>
        );
     
      }}
    />
);
};
export default HomePage;