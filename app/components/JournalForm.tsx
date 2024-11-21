import React from 'react';
import { dayName, formattedDate } from '../lib/dates';

const JournalForm = () => {
  return (
    <form>
      <div className='flex justify-between px-10'>
        <p>{dayName}</p> <p>{formattedDate}</p>
      </div>
      <div className='w-full mt-10'>
        <div className='relative w-full min-w-[200px]'>
          <textarea
            className='peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-white border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-white-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 placeholder-shown:border-t-white focus:border-2 focus:border-white-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
            placeholder=' '
          ></textarea>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-white-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-white-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-white">
            What are your trobouls?
          </label>
        </div>
      </div>
    </form>
  );
};

export default JournalForm;
