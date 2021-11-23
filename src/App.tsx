import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// import components
import StartPage from './components/StartPage';
import Album from './components/album/Album';
import Photo from './components/photo/Photo';


const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/albums' element={<Album />} />
        <Route path='/photos' element={<Photo />} />
      </Routes>
    </div>
  );
}

export default App;