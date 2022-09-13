import React from 'react';
import './contactMe.css';
import { navigationLinks } from '../../helpers/navigationLinks';

function ContactMe() {
	const createLinks = () => {
		return navigationLinks.map((element, index) => (
			<p key={index}>
				<a href={element.ref}>{element.name}</a>
			</p>
		));
	};

	return (
		<div className="contactMe__container" id="contact">
			<div className="contactMe__data__links">
				<div>
					<p>Harrington Park, NJ</p>
					<p>Shivani M Borhara</p>
					<p>shivanimborhara@gmail.com</p>
				</div>
				<div>{createLinks()}</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				Copywright&copy;{new Date().getFullYear()} All rights reserved{' '}
			</div>
		</div>
	);
}

export default ContactMe;
