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
					I am a mom of two beautiful little girls, who decided after her second
					child she wanted better options for her career. As a former therapist,
					spending ten years in the therapy field can really do something to the
					mind. It can expand the way one solves problems and analyzes
					obstacles. It can increase your effectiveness in communication and
					allow you to function in an agile setting. It can also force you to
					see all the scary that could be, and that is a huge part of why I
					decided to find my next chapter. I grew up in a time where you chose a
					career based on wanting a family, it didn't matter that my mind craved
					math and problem solving. To be an Indian woman meant to be a mother
					and a wife. Yes, you were encouraged to have an education, but one
					that allowed for light days and not a busy schedule. In 2021, I took
					advantage of the bootcamp explosion and decided to try a beginner
					javascript course. Here I am a year later, full of excitement and fear
					working towards my new goal: to become a software engineer. This
					journey has been important for me, not just for me, but for the two
					girls I am raising. I am showing them that a female is so much more
					than what the world sees, and I hope that this site has given you a
					small sense of that. Thanks for visiting.
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
