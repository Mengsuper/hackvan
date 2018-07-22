import React, { Component } from 'react';

export default class CompanyStats extends Component {

	render() {
		let items = this.props.items;
		let prices = 0;
		for (let item of items) {
			prices += parseInt(item.price);
		}
		return (
			<div>
				<h4>Items Purchased: { items.length } </h4>
				<h4>Purchased Amount: {  prices } </h4>
				<h4>Purchase History </h4>
			</div>
		);
	}
}
