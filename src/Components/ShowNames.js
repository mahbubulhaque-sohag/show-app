import React, { useEffect, useState } from 'react';
import ShowName from './ShowName';

const ShowNames = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='row'>
            {
                data?.map(show => <ShowName key={show.score} show={show} />)
            }
        </div>
    );
};

export default ShowNames;