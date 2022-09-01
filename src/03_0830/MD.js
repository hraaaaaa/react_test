import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div > 
                <ul>
                <li className='borderBG'>{this.props.sumnail}</li>
                <li className='borderBG'>{this.props.title}</li>
                <li className='borderBG'><span>{this.props.sale}</span>{this.props.price}</li>
                <li className='borderBG'>{this.props.price0}</li>

                </ul>
            </div>
        );
    }
}

export default Child;