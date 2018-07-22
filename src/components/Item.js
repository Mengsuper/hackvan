import React, { Component } from 'react';
import { Image, Thumbnail, Media } from 'react-bootstrap';
import './Item.css';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(item, type) {
        this.props.handleImageClick(item, type);
    }

    render() {
        const { item } = this.props;
        return (
            <div>
                <Media.List>
                    <Media.ListItem>
                        <Media.Left>
                            <img width={64} height={64} src={ item.productImage } alt="thumbnail"
                                onClick={this.handleClick.bind(this, item, 'company')}/>

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
                                    onClick={this.handleClick.bind(this, item, 'product')}
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
