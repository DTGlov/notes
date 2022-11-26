import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getNotes } from './actions/notesActions';
import HomePage from './pages/HomePage';

export const CurrentContext = React.createContext();
export const SetContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
