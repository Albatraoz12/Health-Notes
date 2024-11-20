import React from 'react';
import { dayName, formattedDate } from '../lib/dates';

const JournalForm = () => {
  return (
    <form>
      <div className='flex justify-between px-10'>
        <p>Idag är det: {dayName}</p> <p>Datum: {formattedDate}</p>
      </div>
      <textarea name='info' id='info' />
    </form>
  );
};

export default JournalForm;
