import React from 'react';

const Photograph = () => {
    return (
        <div>
            <h2 className=' my-10 text-center text-xl font-bold '>Image Upload</h2>
            <form className=' w-1/2 mx-auto'>
                <label for="avatar" className=' text-md font-bold'>Choose a profile picture:</label>
                <div className=' my-10'>
                    <input className=' text-center' type="file"
                        id="avatar" name="avatar"
                        accept="image/png, image/jpeg" />
                </div>

                <div className=' flex justify-between my-10'>
                    <button className=' btn btn-primary'>Change Photo</button>
                    <button className=' btn btn-warning'>Delete</button>
                </div>
            </form>
        </div>
    );
};

export default Photograph;