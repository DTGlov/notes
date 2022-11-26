import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getNotes } from './actions/notesActions';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </SetContext.Provider>
      </CurrentContext.Provider>
    </Router>
  );
}

export default App;
