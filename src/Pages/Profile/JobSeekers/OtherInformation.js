import React from 'react';

const OtherInformation = () => {
    return (
        <div>
            <form className=''>
                <h2 className=" text-center text-2xl font-medium">Other Relevant Information</h2>

                <textarea id='career-summary' className="form-control w-full my-lg-4" placeholder='Career Summary'></textarea>

                <textarea id='special-qualification' className="form-control my-lg-4" placeholder='Special Qualification'></textarea>

                <textarea id='keywords' className="form-control  w-full my-lg-4" placeholder='Keywords'></textarea>

                <div className=' d-flex justify-content-between my-4'>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default OtherInformation;