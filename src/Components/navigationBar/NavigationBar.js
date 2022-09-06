import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { navigationLinks } from '../../helpers/navigationLinks';

function NavigationBar() {
	return (
		<div id="home">
			<Navbar>
				<Navbar.Brand href="#home">Shivani M Borhara</Navbar.Brand>
			</Navbar>
		</div>
	);
}

export default NavigationBar;
