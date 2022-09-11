import React from 'react';
import Typed from 'react-typed';
import './header.css';

function Header() {
	return (
		<div className="main-info">
			<h1>Who I see:</h1>
			<Typed
				strings={[
					' ',
					'A Mom',
					'A Wife',
					'A Daughter',
					'A Woman',
					'A Coder',
					' Sometimes Confused',
					'She Who Never Gives Up',
					' ',
				]}
				typeSpeed={40}
				backSpeed={50}
				loop
			/>
		</div>
	);
}

export default Header;
