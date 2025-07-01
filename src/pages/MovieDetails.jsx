import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails, getMovieCredits } from '../services/api';
import '../css/MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id);
        const creditsData = await getMovieCredits(id);
        
        setMovie(data);
        setCast(creditsData.cast.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div className="movie-details">
      <div className="movie-header">
        <div className="poster-wrapper">
        <img
            className="movie-poster-details"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
        />
        </div>
        <div className="movie-meta">
          <h1>{movie.title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <div>
            <strong>Cast:</strong>
            <ul>
              {cast.map(actor => (
                <li key={actor.id}>⭐{actor.name} as {actor.character}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="movie-overview">
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
