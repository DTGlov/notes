import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getNotes } from './actions/notesActions';
import HomePage from './pages/HomePage';

export const CurrentContext = React.createContext();
export const SetContext = React.createContext();

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotes());
  }, [currentId, dispatch]);
  return (
    <Router>
      <CurrentContext.Provider value={currentId}>
        <SetContext.Provider value={setCurrentId}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </SetContext.Provider>
      </CurrentContext.Provider>
    </Router>
  );
}

export default App;
