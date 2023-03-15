import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Movie() {
    const { id } = useParams();

    const [state, setState] = useState({
        movieId: id,
        movieData: {}
    });

    const apiKey = '78d426a3';
    const getMovieDetails = async (movieId) => {
        const response = await fetch(
            'https://www.omdbapi.com/?i=' + movieId + '&apikey=' + apiKey
        );
        const data = await response.json();

        if (data.Poster === 'N/A') {
            data.Poster = 'https://dummyimage.com/450x650.png';
        }

        setState({
            movidId: id,
            movieData: data
        });
        console.log(data);
        return data;
    };

    // Load movie details into state
    useMemo(async () => {
        await getMovieDetails(id);
    }, []);

    return (
        <main id='moviePage'>
            <header>
                <h1>{state.movieData.Title}</h1>
                <p>
                    <i>Plot: "{state.movieData.Plot}"</i>
                </p>
            </header>
            <section id='details'>
                <article>
                    <p>Release year: {state.movieData.Year}</p>
                    <p>Genre: {state.movieData.Genre}</p>
                    <p>Director: {state.movieData.Director}</p>
                    <p>Rated: {state.movieData.Rated}</p>
                    <p>Awards: {state.movieData.Awards}</p>
                    <p>Runtime: {state.movieData.Runtime}</p>
                    <p>Actors: {state.movieData.Actors}</p>
                    <p>IMDb Rating: {state.movieData.imdbRating}</p>
                    <Link to='/'>← Back to search</Link>
                </article>
                <img
                    src={state.movieData.Poster}
                    alt={'Poster for ' + state.movieData.Title}
                />
            </section>
        </main>
    );
}
