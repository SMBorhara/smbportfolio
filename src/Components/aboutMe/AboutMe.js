import React from 'react';
import './aboutMe.css';
import person from '../../images/Portfolio Pic.png';

function AboutMe() {
	return (
		<div className="about__container" id="about-me">
			<div>
				<img src={person} alt="shivani" />
			</div>
			<div className='about__text'>
				<h1>ABOUT ME</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
