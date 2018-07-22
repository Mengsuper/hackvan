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
			<div id="productFrame">
				<Button bsStyle="success" onClick={this.handleBackButton} > Back </Button>
			  <Media>
			    <Media.Left>
			      <img
            width="300px" height="auto"
            src={ item.productImage } alt="thumbnail"
        		/>
			    </Media.Left>
			    <Media.Body>
			    	<p class="blue-text "> Delivered: { deliverDate.toISOString().split('T')[0]}</p>
			    	<Media>
				      <Media.Heading className="multiline">{ item.productTitle }</Media.Heading>
				      <Media.Right>
				        <p class="blue-text"> ${ item.price } </p>
				      </Media.Right>
			      </Media>
			        <p class="details"> Purchase date: { item.purchaseDate } </p>
			        <p class="details"> Return date: { item.returnDate } </p>
			        <p class="details"> Category: { item.type } </p>
		        <p class="blue-text"> <a href={item.productLink} target="_blank">Original purchase link</a> </p>
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
		);
	}
}
