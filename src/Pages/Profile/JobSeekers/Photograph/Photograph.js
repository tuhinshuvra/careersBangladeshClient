import React from 'react';

const Photograph = () => {
    return (
        <div className=''>
            <h2 className=' my-10 text-center text-xl font-bold '>Image Upload Section</h2>
            <form className=' w-25 mx-auto my-lg-4'>
                <label htmlFor="avatar" className=' text-center fw-bold '>Choose a profile picture:</label>
                <div className=' my-10'>
                    <input className=' form-control text-center my-lg-4' type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>

                <div className=' d-flex justify-content-between my-lg-4'>
                    <button className=' btn btn-primary'>Change Photo</button>
                    <button className=' btn btn-warning'>Delete</button>
                </div>
            </form>
        </div >
    );
};

export default Photograph;