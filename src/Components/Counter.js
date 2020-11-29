import React from 'react';
import './Counter.css';

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            startCount: startCount,
            countingRate: countingRate
        }
        
        var startCount = props.startCount;
        var countingRate = props.countingRate;
        
        var clickAdd=() => {
            startCount += countingRate;
            console.log("Add", startCount);
        }
        var clickSubtract=() => {
            startCount -= countingRate;
            console.log("Sub", startCount);
        }
        
        render(){
            setTimeout(() => {
              this.setState({startCount});
            },500)
        }
        return (
            <div class="box">
            <h2>Starting Count:{props.startCount}</h2>
                <br></br>
            <h2>Counting Rate: {countingRate}</h2>
            <div id="btns">
                <br></br>
                <button onClick={()=>clickAdd(startCount, countingRate)}> + </button>
                <button onClick={()=>clickSubtract(startCount, countingRate)}> - </button>
            </div>
        
        </div>
        
    )
}

export default Counter;