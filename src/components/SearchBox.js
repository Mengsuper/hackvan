import React, { Component } from 'react';

class SearchBox extends Component {
	render() {
		const { searchChange } = this.props;
		return (
			<input
				type='search'
				placeholder='search a purchased product'
				onChange={searchChange}
			/>
		)
	}
}

export default SearchBox;
