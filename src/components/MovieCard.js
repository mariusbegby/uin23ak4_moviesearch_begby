import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    if (movie.Poster === 'N/A') {
        movie.Poster = 'https://dummyimage.com/450x650.png';
    }

    return (
        <article className='movieCard'>
            <Link to={'/movie/' + movie.imdbID}>
                <h3>
                    {movie.Title} - {movie.Year}
                </h3>
                <img
                    src={movie.Poster}
                    alt={'Movie poster for ' + movie.Title + ' - ' + movie.Year}
                />
            </Link>
        </article>
    );
}
