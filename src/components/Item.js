import React, { Component } from 'react';
import { Image, Thumbnail } from 'react-bootstrap';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleCompanyClick(this.props.item);
    }

    render() {
        const {item} = this.props;
        return (
            <div>
                <img src ={item.productImage} onClick={this.handleClick}/>
                <h3> Product Title: { item.productTitle }  </h3>
                <p> Price: { item.price } </p>
                <p> Purchase date: { item.purchaseDate } </p>
                <p> Return date: { item.returnDate } </p>
                <p> Category { item.type } </p>
                <p> Product Link { item.productLink } </p>
            </div>
        )
    }
}
