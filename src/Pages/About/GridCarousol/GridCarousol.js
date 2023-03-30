import React from 'react';
import GridCarousolItem from './GridCarousolItem';

import Grameenphone from '../../../assets/images/partners/local/grameenphone-logo.jpeg'
import Primebank from '../../../assets/images/partners/local/primebank.png'
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

			<h3 className=' text-center fw-bold my-md-5 animate_bottom location_heading  '> Our Satisfied Clients </h3>
			<div id="domesticGridCarousol" className="carousel  carousel-dark slide " data-bs-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active customShadow" data-bs-interval="2000">
						<GridCarousolItem
							imgOne={Grameenphone}
							imgTwo={Primebank}
							imgThree={Banglalink}
							imgFour={Janatabank}
							imgFive={Bankasia}
							imgSix={Aritel}

							titleOne="Grameenphone"
							titleTwo="Prime Bank"
							titleThree="Banglalink"
							titleFour="Janata bank"
							titleFive="Bankasia"
							titleSix="Aritel"
						></GridCarousolItem>
					</div>
					<div className="carousel-item customShadow" data-bs-interval="3000">
						<GridCarousolItem
							imgOne={Bankasia}
							imgTwo={Janatabank}
							imgThree={Aritel}
							imgFour={Rupalibank}
							imgFive={Sonalibank}
							imgSix={Primebank}

							titleOne="Bankasia"
							titleTwo="Janata Bank"
							titleThree="Aritel"
							titleFour="Rupali Bank"
							titleFive="Sonali Bank"
							titleSix="Prime Bank"

						></GridCarousolItem>
					</div>
					<div className="carousel-item customShadow" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={Robi}
							imgTwo={Rupalibank}
							imgThree={Sonalibank}
							imgFour={Primebank}
							imgFive={Bankasia}
							imgSix={Aritel}

							titleOne="Robi"
							titleTwo="Rupali Bank"
							titleThree="Sonali Bank"
							titleFour="Prime Bank"
							titleFive="Bankasia"
							titleSix="Aritel"
						></GridCarousolItem>
					</div>
					<div className="carousel-item customShadow" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={Banglalink}
							imgTwo={Rupalibank}
							imgThree={Aritel}
							imgFour={Robi}
							imgFive={Bankasia}
							imgSix={Primebank}

							titleOne="Banglalink"
							titleTwo="Rupali Bank"
							titleThree="Aritel"
							titleFour="Robi"
							titleFive="Bankasia"
							titleSix="Prime Bank"
						></GridCarousolItem>
					</div>

					<div className="carousel-item customShadow" data-bs-interval="4000">
						<GridCarousolItem
							imgOne={Sonalibank}
							imgTwo={Janatabank}
							imgThree={Grameenphone}
							imgFour={Robi}
							imgFive={Primebank}
							imgSix={Aritel}

							titleOne="Sonali Bank"
							titleTwo="Janata Bank"
							titleThree="Grameenphone"
							titleFour="Robi"
							titleFive="Prime Bank"
							titleSix="Airtel"
						></GridCarousolItem>
					</div>

				</div>
				<button className="carousel-control-prev " type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="prev">
					<span className="carousel-control-prev-icon preIcon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next " type="button" data-bs-target="#domesticGridCarousol" data-bs-slide="next">
					<span className="carousel-control-next-icon nextIcon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

		</div>


	);
};

export default GridCarousol;