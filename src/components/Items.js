import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Item from './Item';
import purchasedItems from './dataset/purchase_history.json';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasedItems: [],
            links: []
        }
    }
    componentDidMount() {
        this.setState({ purchasedItems })
    }

    render() {
        const {filteredItems, handleImageClick} = this.props;
        return (
            <ListGroup>
                {
                filteredItems.map((item, index) => (
                    <ListGroupItem key={index}>
                    <Item
                        item={ item }
                        handleImageClick={handleImageClick}
                    />
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

        )
    }
}
