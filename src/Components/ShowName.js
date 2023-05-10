import React from 'react';
import { Link } from 'react-router-dom';

const ShowName = ({ show }) => {
// style={{width: '30%', height:'100'}}
    return (
        <div className='container text-center border rounded col-sm-12 col-md-4 col-lg-4 h-50' >
            <img className='w-100'  src={show.show.image?.original} alt='show-img' style={{height: '300px'}}/>
            <h2 className='mt-5'>{show.show.name}</h2>
            <p>Premiered: {show.show.premiered}</p>

            <Link to={`/showSummery/${show.show.id}`}
                state={{ from: { show } }}
            >
                <button className='w-100 btn btn-primary mb-3'>Show Summery</button>
            </Link>
        </div>
    );
};

export default ShowName;