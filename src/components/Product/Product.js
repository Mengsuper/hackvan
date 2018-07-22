import React, { Component } from 'react';
import { Media, Button } from 'react-bootstrap';
import './Product.css';

export default class Product extends Component {

	constructor(props) {
		super(props);
		this.handleBackButton=this.handleBackButton.bind(this);
	}

	handleBackButton() {
		this.props.handleBackToHome();
	}

	render() {
		const { item } = this.props;
		let deliverDate = new Date(item.purchaseDate);
		deliverDate.setDate(deliverDate.getDate() + 30);

		return (
			<div>
				<Button bsStyle="success" onClick={this.handleBackButton} > Back </Button>
			  <div id="productFrame">
				  <Media>
				    <Media.Left>
				      <img
	            width="200px" height="auto"
	            src={ item.productImage } alt="thumbnail"
	        		/>
				    </Media.Left>
				    <Media.Body>
				    	<p className="blue-text "> Delivered: { deliverDate.toISOString().split('T')[0]}</p>
				    	<Media>
					      <Media.Heading className="multiline">{ item.productTitle }</Media.Heading>
					      <Media.Right>
					        <p className="blue-text"> ${ item.price } </p>
					      </Media.Right>
				      </Media>
				        <p className="details"> Purchase date: { item.purchaseDate } </p>
				        <p className="details"> Return date: { item.returnDate } </p>
				        <p className="details"> Category: { item.type } </p>
			        <p className="blue-text"> <a href={item.productLink} target="_blank">Original purchase link</a> </p>
				    </Media.Body>
				    <Media.Right>
				    	<Media>
				    		<a href={item.trackingLink}><Button bsStyle="warning"> Tracking package </Button></a>
				    	</Media>
				    	<Media>
				    		<a href="#"><Button bsStyle="warning"> Return or replace </Button></a>
				    	</Media>
				    </Media.Right>
				  </Media>
				</div>
			</div>
		);
	}
}
