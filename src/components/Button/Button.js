import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';

function Button({loading}) {
  const page = useSelector(state => state.characters.page);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCharacters(page));
  }

  return (
    <button onClick={handleClick} className='w-full'>
      <div className="animate-bounce bg-white dark:bg-slate-800 my-12 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center mx-auto">
        {
          loading && (
            <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )
        }

        {
          !loading && (
            <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          )
        }
      </div>
    </button>
  );
}

export default Button;
