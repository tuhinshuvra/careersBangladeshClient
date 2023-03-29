import React from 'react';
import GridCarousolItem from './GridCarousolItem';

import Grameenphone from '../../../assets/images/partners/local/grameenphone-logo.jpeg'
import Bangladeshbank from '../../../assets/images/partners/local/bangladeshbank-logo.png'
import Banglalink from '../../../assets/images/partners/local/banglalink-logo.png'
import Janatabank from '../../../assets/images/partners/local/janatabank-logo.png'
import Bankasia from '../../../assets/images/partners/local/bankasia-logo.png'
import Aritel from '../../../assets/images/partners/local/airtel-logo.png'
import Robi from '../../../assets/images/partners/local/robi_logo.png'
import Rupalibank from '../../../assets/images/partners/local/rubalibank-logo.jpeg'
import Sonalibank from '../../../assets/images/partners/local/sonalibank-logo.png'

import './GridCarousol.css'

const GridCarousol = () => {
	return (
		<div className=''>
			{/* ########################## domestic locations flights ################################ */}

			<h1 className=' text-center fw-bold pt-lg-5 animate_bottom location_heading '> Our Satisfied Clients </h1>
			<h2 className='text-center fw-bold pt-lg-2  animate_left location_heading mb-lg-3'> Local Clients</h2>
			<div id="domesticGridCarousol" className="carousel  carousel-dark slide" data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-bs-interval="2000">
						<GridCarousolItem
							imgOne={Grameenphone}
							imgTwo={Bangladeshbank}
							imgThree={Banglalink}

							titleOne="Grameenphone"
							titleTwo="Bangladesh Bank"
							titleThree="Banglalink"
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="3000">
						<GridCarousolItem

							imgOne={Bankasia}
							imgTwo={Janatabank}
							imgThree={Aritel}

							titleOne="Bankasia"
							titleTwo="Janata Bank"
							titleThree="Aritel"
						></GridCarousolItem>
					</div>
					<div className="carousel-item" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={Robi}
							imgTwo={Rupalibank}
							imgThree={Sonalibank}

							titleOne="Robi"
							titleTwo="Rupali Bank"
							titleThree="Sonali Bank"
						></GridCarousolItem>
					</div>

				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

		</div>


	);
};

export default GridCarousol;