import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<input
			type='search'
			placeholder='search a purchased product'
			onChange={searchChange}
		/>
	)
}

export default SearchBox;
