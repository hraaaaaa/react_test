import React, { Component } from 'react';
import Child from './Child';
import MD from './MD';
class Parent extends Component {
    render() {
        return (
            <>
             <Child name="홍길동" age="30" hobby="운동" />   
             <hr />
             <Child  />   
             <hr />
             <MD sumnail="사진" title="Hello! 원양산 손질 오징어 300g(냉동)" sale="11%" price="5200원" price0="5900"></MD>
             <MD sumnail="사진" title="[밀도]담백식빵" sale="10%" price="5850원" price0="6500원"></MD>
            </>
        );
    }
}

export default Parent;