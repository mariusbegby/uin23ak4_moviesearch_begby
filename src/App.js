import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Search from './components/Search';
import Results from './components/Results';
import Movie from './components/Movie';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Search />} />
                <Route path='/results' element={<Results />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Route>
        </Routes>
    );
}

export default App;
