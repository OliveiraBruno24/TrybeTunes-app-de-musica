import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';
import { Layout } from './pages/components/layout';
// import Search from './pages/Search/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/" element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>

    </Routes>
  );
}

export default App;
