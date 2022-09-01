import React, { Component } from 'react';

// function Child3({name, age, hobby}){
const Child3=({name, age, hobby})=>{
   
        return (
            <div>
                <h3>이 름 : {name}</h3>
                <h3>나 이 : {age}</h3>
                <h3>취 미 : {hobby}</h3>
                <hr/>
            </div>
        );
    }


export default Child3;