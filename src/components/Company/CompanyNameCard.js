import React, { Component } from 'react';
import { Media, Button } from 'react-bootstrap';

export default class CompanyNameCard extends Component {

	constructor(props) {
		super(props);
		this.handleBackButton=this.handleBackButton.bind(this);
	}

	handleBackButton() {
		this.props.handleBackToHome();
	}

	render() {
		const { item } = this.props;
		return (
			<div>
				<Button bsStyle="success" onClick={this.handleBackButton} > Back </Button>

			  <Media>
			    <Media.Left>
			      <img width={64} height={64} src={item.productImage} alt="thumbnail" />
			    </Media.Left>
			    <Media.Body>
			      <Media.Heading>{ item.companyName }</Media.Heading>
			      <p> { item.companyName } </p>
			    </Media.Body>
			  </Media>
			</div>
		);
	}
}
