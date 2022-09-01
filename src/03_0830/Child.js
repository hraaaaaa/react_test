import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <>
                <h3>이름 : {this.props.name}</h3>   
                <h3>나이 : {this.props.age}</h3>   
                <h3>취미 : {this.props.hobby}</h3>   
            </>
        );
    }
}
// 전달 받은 값이 없을 때 기본값 설정
Child.defaultProps ={
        name:'없음',
        age:20,
        hobby: '코딩'
}

export default Child;