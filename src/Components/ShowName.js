import React from 'react';
import { Link } from 'react-router-dom';

const ShowName = ({ show }) => {

    return (
        <div className='container text-center border col-sm-12 col-md-6 col-lg-4'>
            {/* <img className='img-fluid w-100 h-75' src={show.show.image?.original} alt='show-img'/> */}
            <h2 className='mt-5'>{show.show.name}</h2>
            <p>Premiered: {show.show.premiered}</p>

            <Link to={`/showSummery/${show.show.id}`}
                state={{ from: { show } }}
            >
                <button className='btn btn-secondary mb-3'>Summery</button>
            </Link>
        </div>
    );
};

export default ShowName;