import React from 'react';
import DevIcon from 'devicon-react-svg';
import './technologies.css';
import { techs } from '../../helpers/techs';

function Technologies() {
	return (
		<div className="tech__container" id="tech">
			<div>
				<h1 style={{ textAlign: 'center' }}>Technologies I Use</h1>
			</div>
			<div className="tech__cards__container">
				{techs.map((element, index) => {
					return (
						<div id={index} className="tech__card">
							<DevIcon className="tech__icons" icon={element.iconName} />
							<span style={{ margin: '5px', fontSize: '1.5rem' }}></span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Technologies;
