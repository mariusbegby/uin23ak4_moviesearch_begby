import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Search from './pages/Search';
import Movie from './pages/Movie';
import './css/main.css';

function App() {
    const defaultResults = [];

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Search defaultResults={defaultResults} />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Route>
        </Routes>
    );
}

export default App;
