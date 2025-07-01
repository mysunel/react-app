import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    const {isFavorite, addFavorite, removeFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();

        if(favorite) removeFavorite(movie.id);
        else addFavorite(movie);
    }

    return (
        <>
            <div className="movie-card">
                <Link to={`/movies/${movie.id}`} className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
                            ♥
                        </button>
                    </div>
                </Link>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.replaceAll('-', '/')}</p>
                </div>
            </div>
        </>
    );
}

export default MovieCard