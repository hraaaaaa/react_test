import React, { Component } from 'react';


class Con extends Component {
    render() {
        const{num, title, contents}=this.props;
        return (
            <div className='wrapper'>
                <h2 className='components'><span>{num}. </span>{title}</h2>
                <p className='components'>{contents}</p>
            </div>
        );
    }
}

export default Con;