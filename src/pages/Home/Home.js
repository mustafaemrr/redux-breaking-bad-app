import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchCharacters} from '../../redux/charactersSlice';

function Home() {
  const data = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch])

  console.log(data);

  return (
    <div>
      Home
    </div>
  )
}

export default Home
