import React, { Component } from 'react';


class Game extends Component {
    // 문제 : 명령프롬프트창을 띄워서 1등을 입력하면 '축 당첨 해외여행 상품권에 당첨되셨습니다.'
    shoot=()=>{
       let txt = prompt('등수를 입력하세요','예) 1');
       
           if (Number(txt)===1){
               alert('축 당첨! 해외여행 상품권에 당첨되셨습니다.');
           } else if(Number(txt)===2){
               alert('대형tv에 당첨되셨습니다.');
           }else{
               alert('꽝');
           }
    
    }
    
    render() {
        return (
            <div className="shoot" >
                {/* 버튼을 사용하여 클릭시 위 함수 호출하기 */}
                <button onClick={this.shoot}>버튼을 클릭하시면 결과를 보실 수 있습니다.</button>
            </div>
        );
    }
}

export default Game;