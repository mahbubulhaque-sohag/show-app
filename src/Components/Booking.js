import React from 'react';

const Booking = () => {
    const handleBooking = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const phoneNumber = event.target.phoneNumber.value;
        const email = event.target.email.value;
        const address = event.target.address.value;

        console.log(name, phoneNumber, email, address)
    }
    return (
        <div className='d-flex align-items-center justify-content-center text-center '>
            {/* booking form */}
            <form className='border rounded m-5 p-5' onSubmit={handleBooking}>
                <h3 className=''>Book Now</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' id="exampleInputName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">Phone Number</label>
                    <input type="number" className="form-control" name='phoneNumber' id="exampleInputEmail1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' id="exampleInputEmail1" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name='address' id="exampleInputAddress" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Confirm</button>
            </form>
        </div>
    );
};

export default Booking;