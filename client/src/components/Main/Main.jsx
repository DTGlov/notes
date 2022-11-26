import React from 'react';
import Form from '../Form/Form';
import Notes from '../Posts/Notes';

export default function Main() {
  return (
    <div className="flex flex-col-reverse m-8 sm:grid sm:grid-cols-3 sm:gap-3 text-white">
      <Notes />
      <Form />
    </div>
  );
}
