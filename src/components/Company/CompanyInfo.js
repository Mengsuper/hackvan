import React, { Component } from 'react';
import CompanyNameCard from './CompanyNameCard';
import CompanyStats from './CompanyStats';

export default class CompanyInfo extends Component {
	render() {
		return (
			<div>
				<CompanyNameCard item={this.props.item} handleBackToHome={this.props.handleBackToHome} />
				<CompanyStats />
			</div>
		);
	}
}
