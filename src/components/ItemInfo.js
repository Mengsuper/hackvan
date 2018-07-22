import React, { Component } from 'react';

export default class ItemInfo extends Component {
	render() {
		const { item } = this.props;
		return (
			<div>
        <p> Price: { item.price } </p>
        <p> Purchase date: { item.purchaseDate } </p>
        <p> Return date: { item.returnDate } </p>
        <p> Category: { item.type } </p>
        <p> Link: { item.productLink } </p>
			</div>
		);
	}
}
