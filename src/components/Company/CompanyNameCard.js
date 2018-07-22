import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

export default class CompanyNameCard extends Component {
	render() {
		const { companyName } = this.props;
		return (
			<div>
			  <Media>
			    <Media.Left>
			      <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
			    </Media.Left>
			    <Media.Body>
			      <Media.Heading>{ companyName }</Media.Heading>
			      <p>
			      	{ companyName }
			      </p>
			    </Media.Body>
			  </Media>
			</div>
		);
	}
}
