import React, { Component } from 'react';
import CompanyNameCard from './CompanyNameCard';
import CompanyStats from './CompanyStats';
import { Button, Grid, Row, Col } from 'react-bootstrap';

export default class CompanyInfo extends Component {

	constructor(props) {
		super(props);
		this.handleBackButton=this.handleBackButton.bind(this);
	}

	handleBackButton() {
		this.props.handleBackToHome();
	}

	render() {

		return (
			<div>
				<Button bsStyle="success" onClick={this.handleBackButton} > Back </Button>
				<Grid>
				  <Row>
					<Col>
					  <CompanyNameCard item={this.props.item} handleBackToHome={this.props.handleBackToHome} />
					  <CompanyStats items={this.props.items.filter(item => item.companyName == this.props.item.companyName)} />
					</Col>
				  </Row>
				</Grid>
			</div>
		);
	}
}
