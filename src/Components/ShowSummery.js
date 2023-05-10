import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ShowSummery = () => {
    const location = useLocation();
    const show = location?.state?.from.show;
    console.log(show)
    // style={{width: '18rem'}}
    return (
        <div class="card text-center container mt-5" >
  {/* <img className='img-fluid' src={show.show.image.original} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{show.show.name}</h5>
    <p className="card-text">{show.show.summary}</p>
    <Link to='/booking'>
    <button class="btn btn-primary">Book This Show</button>
    </Link>
  </div>
</div>
    );
};

export default ShowSummery;