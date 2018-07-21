import React, { Component } from 'react';
import { Image, Thumbnail } from 'react-bootstrap';

export default class Item extends Component {
    render() {
        return (
            <div>
                <Thumbnail src="/image/fbIcon.png" alt="171x180" responsive />
                <h3> Product Title: Facebook  </h3>
                <p> Price: </p>
                <p> Purchase date: </p>
                <p> Return date: </p>
                <p> Category </p>
            </div>
        )
    }
}