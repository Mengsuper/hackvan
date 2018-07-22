import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';
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
    async fetchProductLinks (url) {
        await fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        const {filteredItems, handleCompanyClick} = this.props;
        return (
            <Grid>
                <Row>
                    <Col>
                        <ListGroup>
                            {
                            this.state.purchasedItems.map((item, index) => (
                                <ListGroupItem key={index}>
                                <Item
                                    item={ item }
                                    handleCompanyClick={handleCompanyClick}
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
                    </Col>
                </Row>
            </Grid>
        )
    }
}
