import React from 'react';
import { useState } from 'react';
import './portfolio.css';
import portfolioData from '../../helpers/portfoliodata';
import { Container, Row, Card, Image, Modal, Button } from 'react-bootstrap';

function Portfolio() {
	const [modalShow, setModalShow] = useState(false);
	const [tempData, setTempData] = useState({});

	const createModal = (data) => {
		return (
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				size="lg"
				arial-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						{data.title}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{data.summary} </p>
					<Image src={data.image} style={{ width: '200px' }} />
				</Modal.Body>
				<a href={data.link} target="__blank" rel="noreferrer">
					Visit Site
				</a>
				<Modal.Footer>
					<div>Technologies Used: </div>
					<p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>
						{data.tech}{' '}
					</p>
					<Button onClick={() => setModalShow(false)}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	const mapped = portfolioData.map((element, index) => {
		return (
			<Card key={index} id="portfolio__card__container">
				<Image
					className="portfolio__image"
					onClick={() => {
						setTempData({
							image: element.image,
							link: element.link,
							title: element.title,
							summary: element.summary,
							tech: element.tech,
						});
						setModalShow(true);
					}}
					src={element.image}
				/>
				<div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
				{createModal(tempData)}
			</Card>
		);
	});

	return (
		<div className="portfolio__container" id="portfolio">
			<h1>PORTFOLIO</h1>
			<p>
				This is my Github page:{' '}
				<a href="https://github.com/SMBorhara" target="_blank" rel="noreferrer">
					https://github.com/SMBorhara
				</a>{' '}
			</p>
			<Container fluid="lg" style={{ padding: '2rem 0' }}>
				<Row>{mapped}</Row>
			</Container>
		</div>
	);
}

export default Portfolio;
