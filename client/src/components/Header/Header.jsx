import React from 'react';
import { BiNote } from 'react-icons/bi';

export default function Header() {
  return (
    <nav className="h-16 m-8 rounded-lg bg-black shadow-lg text-white flex items-center justify-center">
      <h1 className="text-center text-white font-bold text-3xl">NoteTaker</h1>
      <BiNote size={30} />
    </nav>
  );
}
