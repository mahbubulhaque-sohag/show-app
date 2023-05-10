import React from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
    const location = useLocation();
    const show = location?.state?.from.show;
    console.log(show)
    const handleBooking = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const phoneNumber = event.target.phoneNumber.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const user = {name: name, phoneNumber: phoneNumber, email: email, address: address };

        localStorage.setItem('userData', JSON.stringify(user));

        console.log(name, phoneNumber, email, address)
    }
    return (
        <div className='d-flex align-items-center justify-content-center text-center '>
            {/* booking form */}
            <form className='border rounded m-5 p-5' onSubmit={handleBooking}>
                <h3 className=''>Book Now</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputMovieName" className="form-label">Movie Name</label>
                    <input type="text" defaultValue={show.show.name} readOnly className="form-control text-center" name='address' id="exampleInputMovieName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Your Name</label>
                    <input type="text" className="form-control text-center" name='name' id="exampleInputName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                    <input type="number" className="form-control text-center" name='phoneNumber' id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control text-center" name='email' id="exampleInputEmail1" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control text-center" name='address' id="exampleInputAddress" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
            </form>
        </div>
    );
};

export default Booking;