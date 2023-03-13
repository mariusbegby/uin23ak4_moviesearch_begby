import { Link } from 'react-router-dom';

/*
{
    Poster: "https://m.media-amazon.com/images/M/MV5BMTNkNWIwNGUtNTJlOC00NDU3LTk0NWEtNjNjNDM4NzRiNThkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    Title: "James and the Giant Peach"
    Type: "movie"
    Year: "1996"
    imdbID: "tt0116683"
}
*/

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
