import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Loading from '../Loading';
import './Detail.scss';

function Detail() {
  const { char_id } = useParams();
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
    .then((res) => res.data)
    .then((data) => setChar(data[0]))
    .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <>
      {loading && <Loading />}
      { char && (
        <div className='detail'>
          <div className="detail__left">
            <img src={char.img} alt="" />
          </div>
          <div className="detail__right">
            <h1 className='detail__name'>{char.name}</h1>
            <h2 className='detail__nickname'>{char.nickname}</h2>
          </div>
        </div>
      )
      }
    </>
  );
}

export default Detail;
