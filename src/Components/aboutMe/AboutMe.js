import React from 'react';
import './aboutMe.css';
import person from '../../images/Portfolio Pic.png';

function AboutMe() {
	return (
		<div className="about__container" id="about-me">
			<div>
				<img src={person} alt="shivani" />
			</div>
			<div className="about__text">
				<h1>ABOUT ME</h1>
				<p>
					I am a mom of two beautiful little girls, I decided after my second
					child I wanted better options for my career. As a former therapist,
					spending ten years in the therapy field can really do something to the
					mind. It has expanded the way I solve problems and analyze obstacles.
					It also taught me the importance of effective two-way communication.
					It can also force you to see all the scary that could be, and that is
					a huge part of why I decided to find my next chapter. Here I am a year
					later, full of excitement and fear working towards my new career:
					software engineering. This journey has been important for not just me,
					but for the two girls I am raising. I am showing them that a female is
					so much more than what roles society expects of you, and that you can
					make your own path and choices. I hope that this site has given you a
					small sense of who I am and the value add I would have to your
					engineering team. Thanks for visiting.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
