import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Item from './Item';

export default class Items extends Component {

    render() {
        const {filteredProducts} = this.props;
        return (
            <div>
                <ListGroup>
                    {
                        filteredProducts.map((item, index) => (
                            <ListGroupItem>
                                <Item item={ item } />
                            </ListGroupItem>
                        ))
                    }
                    <ListGroupItem header="Heading 2" href="#">
                        Linked item
                    </ListGroupItem>
                    <ListGroupItem header="Heading 3" bsStyle="danger">
                        Danger styling
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
