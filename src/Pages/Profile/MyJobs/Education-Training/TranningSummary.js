import React from 'react';

const TranningSummary = () => {
    return (
        <div>

            <h2 className=" text-center text-2xl font-medium mb-10">
                Training
            </h2>

            <form action="">

                <div className="row my-lg-4">
                    <div className=' col-lg-4'>
                        <input className='input form-control' id="training-title" type="text" placeholder='Training Title' />
                    </div>

                    <div className=' col-lg-4'>
                        <input className='input form-control' id="topics-covered" type="text" placeholder='Topics Covered' />
                    </div>

                    <div className=' col-lg-4'>
                        <input className='input form-control' id="country" type="text" placeholder='Country' />
                    </div>

                </div>

                <div className=''>
                    <input className='input form-control' id="location" type="text" placeholder='Location' />
                </div>

                <div className=' d-flex justify-content-between  my-lg-4 '>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form >
        </div >
    );
};

export default TranningSummary;