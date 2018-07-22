import React, { Component } from 'react';
import { Image, Thumbnail, Media } from 'react-bootstrap';
import './Item.css';

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
                <Media.List>
                    <Media.ListItem>
                        <Media.Left>
                            <img
                                width={64} height={64} src={ item.productImage } alt="thumbnail"
                                onClick={this.handleClick}/>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading> {item.companyName} </Media.Heading>
                        <Media>
                            <Media.Left>
                            <img width={128} height={128} src={ item.productImage } alt="thumbnail" />
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
                        </Media.Body>
                    </Media.ListItem>
                </Media.List>


>>>>>>> 276931e92ca87528b68eaf04762777e572e038e4
            </div>

        )
    }
}
