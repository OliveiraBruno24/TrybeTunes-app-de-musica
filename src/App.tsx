import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Search from './pages/search';
import Album from './pages/album';
// import Search from './pages/Search/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      { <Route path="/album/:id" element={ <Album /> } />
        /* <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/profile/edit" element={ <Profile /> } />
      </Route>
      <Route path="*" element={ <NotFound /> }  */}
      {/* </Route> */}
    </Routes>
  );
}

export default App;
