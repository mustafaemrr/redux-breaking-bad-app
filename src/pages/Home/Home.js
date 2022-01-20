import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../redux/charactersSlice';
import Card from '../../components/Card';
import Title from '../../components/Title';
import Loading from '../../components/Loading';
import Error from '../../components/Error/Error';
import Button from '../../components/Button';

import './Home.scss';

function Home() {
  const data = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const hasNextPage = useSelector(state => state.characters.hasNextPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch])

  return (
    <>
      <Title title="The Breaking Bad" subtitle="CHARACTERS" />
        {
          isLoading && (
            <Loading />
          )
        }
        {
          error && (
            <Error message={error} />
          )
        }
      <div className="list box-border md:masonry before:box-inherit after:box-inherit">
        {
          data.map((item) => (
            <Card key={item.char_id} image={item.img} title={item.name} />
          ))
        }
      </div>
        {
          hasNextPage && (
            <Button loading={isLoading}/>
          )
        }
        {
          !hasNextPage && (
            <div className='text-white text-center my-8'>There is nothing to be shown.</div>
          )
        }
    </>
  )
}

export default Home
