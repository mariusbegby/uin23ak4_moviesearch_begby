import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

export default function Search() {
    const [state, setState] = useState({
        query: '',
        results: []
    });

    const apiKey = '78d426a3';
    const getResults = async (title) => {
        const response = await fetch(
            'https://www.omdbapi.com/?s=' + title + '&type=movie&apikey=' + apiKey
        );
        const data = await response.json();

        if (data.Response && data.Search) {
            return data.Search;
        }
        return [];
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = async (e) => {
        let query = e.target.value;
        console.log('Query: ' + query);

        let results = [];

        if (query.length < 3) {
            results = await getResults('James Bond');
        } else {
            results = await getResults(query);
        }

        setState({
            query: query,
            results: results
        });

        console.log(results);
    };

    return (
        <main>
            <h1>Search</h1>
            <form className='movieSearchForm' onSubmit={handleSubmit}>
                <label htmlFor='movieTitle' className='hidden'>
                    Search for a movie title
                </label>
                <input
                    type='search'
                    id='movieTitle'
                    name='movieTitle'
                    placeholder='Search for a movie title...'
                    onChange={handleChange}></input>
            </form>
            <section id='movieResults'>
                {state.results.map((movie) => {
                    return <MovieCard movie={movie}></MovieCard>;
                })}
            </section>
        </main>
    );
}
