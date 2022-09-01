//rsf 함수형 컴포넌트
import React, {useState} from 'react';

function Counterf(props) {
    const [num, setNum] = useState(0);
    
    const onPlus=()=>{//+함수
        setNum(num+1);
    }
    const onMinus=()=>{//-함수
        setNum(num-1);
    }
    
    return (
        <>
            <h2>{num}</h2>
            <button onclick={onPlus}>+</button>
            <button onclick={onMinus}>-</button>
        </>
    );
}

export default Counterf;
