import React from 'react';

const ProfessionalCertificationSummary = () => {
    return (
        <div>
            <h2 className=" text-center text-2xl font-medium mb-10">  Professional Certification</h2>

            <form action="">

                <div className='row my-lg-4' >
                    <div className=' col-lg-4'>
                        <input className='input form-control' id="certification" type="text" placeholder='Certification' />
                    </div>
                    <div className=' col-lg-4'>
                        <input className='input form-control' id="institute" type="text" placeholder='Institute' />
                    </div>
                    <div className=' col-lg-4'>
                        <input className='input form-control' id="duration" type="text" placeholder='Duration' />
                    </div>
                </div>

                <div className=' my-lg-4'>
                    <input className='input form-control' id="location" type="text" placeholder='Location' />
                </div>

                <div className=' d-flex justify-content-between my-lg-4 '>
                    <button className="btn btn-warning fw-bold">Cancel</button>
                    <button type='submit' name='submit' className="custom_btn">Save</button>
                </div>
            </form>
        </div>
    );
};

export default ProfessionalCertificationSummary;