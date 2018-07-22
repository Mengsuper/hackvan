import React, { Component } from 'react';
import CompanyNameCard from './CompanyNameCard';
import CompanyStats from './CompanyStats';

export default class CompanyInfo extends Component {
	render() {
		const { companyName} = this.props;
		return (
			<div>
				<CompanyNameCard
					companyName={companyName}
				/>
				<CompanyStats />
			</div>
		);
	}
}
