import React from 'react';
import Typed from 'react-typed';
import './header.css';

function Header() {
	return (
		<div className="main-info">
			<h1>Who I am:</h1>
			<Typed
				strings={[
					' ',
					'A Mom',
					'A Wife',
					'A Daughter',
					'A Woman',
					'A Coder',
					'She Who Never Gives Up',
					' ',
				]}
				typeSpeed={90}
				backSpeed={80}
				loop
			/>
		</div>
	);
}

export default Header;
