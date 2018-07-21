import React, { Component } from 'react';
import { Image, Thumbnail, Media } from 'react-bootstrap';
import './Item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item;
        return (
            
            <div>
                <Media>
                    <Media.Left>
                        <Thumbnail src={ item.productImage } alt="171x180" responsive="true" />
                    </Media.Left>
                    <Media.Body>    
                        <Media.Heading> { item.productTitle.substring(0, 50) }  </Media.Heading>
                        <p> Price: { item.price } </p>
                        <p> Purchase date: { item.purchaseDate } </p>
                        <p> Return date: { item.returnDate } </p>
                        <p> Category: { item.type } </p>
                        <p> Link: { item.productLink } </p>
                    </Media.Body>
                </Media>
            </div>

        )
    }
}