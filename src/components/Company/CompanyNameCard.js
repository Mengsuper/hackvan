import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './Company.css';

export default class CompanyNameCard extends Component {

	render() {
		const { item } = this.props;
		return (
			<div className="nameCard">
				<Media>
					<Media.Left>
						<img width={64} height={64} src={item.companyLogo} alt="thumbnail" />
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
