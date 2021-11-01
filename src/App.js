import React from 'react';

// ROUTING
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import Notfound from './components/Notfound';
import Login from './components/Login';
// CONTEXT
import UserProvider from './context';

// STYLES
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
