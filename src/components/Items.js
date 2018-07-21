import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Item from './Item';
import purchasedItems from './dataset/purchase_history.json';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            purchasedItems: []
        }
    }
    componentDidMount() {
        this.setState({ purchasedItems })
    }
    render() {
        return (
            <div>
                <ListGroup>
                    {
                        this.state.purchasedItems.map((item, index) => (
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