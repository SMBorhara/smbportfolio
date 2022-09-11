import React from 'react';
import './navigationBar.css';

import { Navbar, Nav } from 'react-bootstrap';
import { navigationLinks } from '../../helpers/navigationLinks';

let createLinks = () => {
	return navigationLinks.map((element, index) => (
		<Nav.Link key={index} href={element.ref}>
			{element.name}
		</Nav.Link>
	));
};

function NavigationBar() {
	return (
		<div id="home">
			<Navbar
				className="navigation__container"
				style={{ zIndex: '2', top: '0', width: '100' }}
				collapseOnSelect
				expand="md"
			>
				<Navbar.Brand style={{ marginLeft: '1rem' }} href="#home">
					Shivani M Borhara
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					style={{
						justifyContent: 'flex-end',
						marginRight: '1rem',
						borderColor: 'none',
					}}
				>
					<Nav style={{ margin: '0 1rem' }} className="links">
						{createLinks()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NavigationBar;
