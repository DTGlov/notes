import React from 'react';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const notes = useSelector((state) => state.notesReducer);

  console.log(notes);
  return <div>HomePage</div>;
}
