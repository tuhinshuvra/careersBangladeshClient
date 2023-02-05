import React from 'react';

const AcademicSummary = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>

                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className=" text-center text-2xl font-medium mb-10">
                    Academic
                </h2>

                {/* <div className="collapse-content"> */}
                {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                <form action="">

                    <div className="row my-lg-4 ">
                        <div className=' col-lg-4'>
                            <select className=" form-select ">
                                {/* <option disabled selected>Select</option> */}
                                <option disabled selected>Select Education Level</option>
                                <option value={0}>PSD</option>
                                <option value={1}>Masters</option>
                                <option value={2}>Degree</option>
                                <option value={3}>HSC</option>
                                <option value={4}>SSC</option>
                            </select>
                        </div>
                        <div className=' col-lg-4'>
                            <select className=" form-select ">
                                {/* <option disabled selected>Select</option> */}
                                <option disabled selected>Select Exam/Degree Title</option>
                                <option value={0}>BSC</option>
                                <option value={1}>BA</option>
                                <option value={2}>BCom</option>
                                <option value={3}>MSC</option>
                                <option value={4}>MA</option>
                                <option value={5}>MCom</option>
                                <option value={6}>Science</option>
                                <option value={7}>Arts</option>
                                <option value={8}>Commerce</option>
                            </select>
                        </div>

                        <div className=' col-lg-4'>
                            <input className='input form-control' id="group" type="text" placeholder='Concentration/ Major/Group' />
                        </div>
                    </div>



                    <div className='row my-lg-4'>
                        <div className=' col-lg-4'>
                            <input className='input form-control' id="institute-name" type="text" placeholder='Institute Name' />
                        </div>

                        <div className=" col-lg-4">
                            <input className='input form-control' id="pass-result" type="text" placeholder='Enter Result' />
                        </div>


                        <div className=' col-lg-4'>
                            <input className="input form-control" type="text" id='duration-years' placeholder='Duration (Years)' />
                        </div>
                    </div>


                    <div className="row my-lg-4">
                        <div className=' col-lg-4'>
                            <input className="input form-control" id='mejor-subject' type="text" placeholder="Major Subject" />
                        </div>

                        <div className=' col-lg-4'>
                            <select className=' form-select'>
                                <option id='year-of-passing' disabled selected className=''>Select Passing Year</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                            </select>
                        </div>
                        <div className=' col-lg-4'>
                            <input className="input form-control" type="text" id='achivement' placeholder='Achivement' />
                        </div>

                    </div>


                    <div className=' d-flex justify-content-between my-lg-5'>
                        <button className="btn btn-warning fw-bold">Cancel</button>
                        <button type='submit' name='submit' className="custom_btn">Save</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AcademicSummary;