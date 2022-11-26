import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

export default function HomePage() {
  const notes = useSelector((state) => state.notesReducer);
  console.log(notes);

  return (
    <div className="max-w-4xl mx-auto">
      <Header />
      <Main />
    </div>
  );
}
