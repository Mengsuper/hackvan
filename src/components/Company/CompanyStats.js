import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import "./Company.css"


export default class CompanyStats extends Component {

	render() {
		let items = this.props.items;
		let prices = 0;
		for (let item of items) {
			prices += parseInt(item.price);
		}
		return (
			<div className="CompAggInfo">
				<Grid>
					<Row className="show-grid">
						<Col xs={6} md={8}>
							<h6>Number of items purchased</h6>
						</Col>
						<Col xs={4} md={4}>
							{ items.length }
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={6} md={8}>
							<h6>Total purchased amount</h6>
						</Col>
						<Col xs={4} md={4}>
							${  prices }
						</Col>
					</Row>
					<Row className="show-grid">
						<Col  xs={6} md={8}>
							<h6>Purchase history</h6>
						</Col>
					</Row>
				</Grid>
								<div>
		                  {
	                  		items.map((item, index) => (
	                  				<img
		                      		key={item.productTitle}
		                      		className="product-image-list"
		                      		width={200} height="auto"
		                      		src={item.productImage}
		                      		alt={item.productTitle}
		                      	/>
											  ))
		                  }
								</div>

			</div>
		);
	}
}
