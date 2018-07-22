import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
import "./Company.css"

export default class CompanyStats extends Component {
	constructor(props) {
		super(props);
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(item, type) {
    this.props.handleImageClick(item, type);
  }

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
						<Col xs={4} md={3}>
							<h4>Number of items purchased</h4>
						</Col>
						<Col xs={2} md={1}>
							<h4>{ items.length }</h4>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col xs={4} md={3}>
							<h4>Total purchased amount</h4>
						</Col>
						<Col xs={2} md={1}>
							<h4>${  prices }</h4>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col  xs={6} md={6}>
							<h4>Purchase history</h4>
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
                    		onClick={this.handleClick.bind(this, item, 'product')}
                    	/>
								  ))
                }
					</div>
			</div>
		);
	}
}
