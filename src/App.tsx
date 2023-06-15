import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> }>
        {/* <Route index element={ <Home /> } />
        <Route path="/profile/:username" element={ <Profile /> } /> */}
      </Route>
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  );
}

export default App;
