import React, { Component } from 'react';

class Counter extends Component {
    state = {
        num:0 //초기화
    }
        //1씩 증가하는 함수
            onPlus=()=>{
                //setState함수는 state의 값을 변경할 떄 주는 함수
                this.setState({num :this.state.num+1});
            };

        //1씩 감소하는 함수
            onMinus=()=>{
                this.setState({num :this.state.num-1});
            };
    
    render() {
        return (
            <>
                <h2>{this.state.num}</h2>   
                <button onClick={this.onPlus}>+</button>
                <button onClick={this.onMinus}>-</button>
            </>
        );
    }
}

export default Counter;