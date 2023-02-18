import React from 'react';

const Employment = () => {
    return (
        <div>
            <div className=''>
                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className=" text-center text-2xl font-medium my-5">
                    Employment History
                </h2>

                <form action="">

                    <div className="row my-lg-4">
                        <div className=' col-lg-4'>
                            <input className='input form-control' id="company-name" type="text" placeholder='Company Name' />
                        </div>

                        <div className=' col-lg-4'>
                            <input className='input form-control' id="company-business" type="text" placeholder='Company Business' />
                        </div>

                        <div className=' col-lg-4'>
                            <input className='input form-control' id="department" type="text" placeholder='Your Department' />
                        </div>
                    </div>

                    <div className="row my-lg-4">
                        <div className=' col-lg-4'>
                            <input className='input form-control' id="designation" type="text" placeholder='Designation' />
                        </div>

                        <div className=' col-lg-4'>
                            <input className='input form-control' id="emp-period" type="text" placeholder='Employment Period' />
                        </div>

                        <div className=' col-lg-4'>
                            <input className='input form-control' id="responsibilities" type="text" placeholder='Responsibilities' />
                        </div>
                    </div>

                    <div className="my-lg-4">
                        <input className='input form-control' id="company-location" type="text" placeholder='Company Location' />
                    </div>

                    <div className="my-lg-4">
                        <textarea className='input form-control w-100' id="others" type="text" placeholder='Others' />
                    </div>

                    <div className=' d-flex justify-content-between my-4 '>
                        <button className="btn btn-warning fw-bold">Cancel</button>
                        <button type='submit' name='submit' className="custom_btn">Save</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Employment;