import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon,
	Grid, Row, Col } from 'react-bootstrap';

class SearchBox extends Component {
	render() {
		const { searchChange } = this.props;
		return (
			<div>
			<Grid>
              <Row>
            	<Col>
					<FormGroup>
						<InputGroup>
						<InputGroup.Addon><Glyphicon glyph='search' /></InputGroup.Addon>
						<FormControl type="text" 
							placeholder="Search by product" 
							value={this.props.searchText}
							onChange={searchChange} />
						</InputGroup>
				</FormGroup>
		  		</Col>
              </Row>
            </Grid>
		  </div>
		)
	}
}

export default SearchBox;
