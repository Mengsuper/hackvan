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
                                width="150px" height="100px" src={ item.productImage } alt="thumbnail"
                                onClick={this.handleClick}
                            />
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading id="compName"> {item.companyName} </Media.Heading>
                        <Media>
                            <Media.Body>
                                <Media.Heading id="itemName">{ item.productTitle.substring(0,60) } </Media.Heading>
                            </Media.Body>
                        </Media>
                        <Media>
                            <Media.Left>
                                <img
                                    id="itemImage"
                                    width="300px" height="auto"
                                    src={ item.productImage } alt="thumbnail"
                                />
                            </Media.Left>
                        </Media>
                        <Media>
                            <Media.Left>
                                <p id="date"> { item.purchaseDate } </p>
                            </Media.Left>
                        </Media>
                        </Media.Body>
                    </Media.ListItem>
                </Media.List>
            </div>
        )
    }
}
