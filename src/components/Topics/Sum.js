import React, { Component } from 'react';

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    changeHandler(val, select){
        if (select === 1){
            this.setState({ number1: val })
        }
        else if (select === 2){
            this.setState({ number2: val })
        }
        //console.log(this.state.number1);
    }

    submitHandler(){
        let firstNum = parseFloat(this.state.number1);
        let secondNum = parseFloat(this.state.number2);
        let final = firstNum + secondNum;

        this.setState({ sum: final })
    }

    render () {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={ (e) => this.changeHandler(e.target.value, 1) } ></input>
                <input className="inputLine" onChange={ (e) => this.changeHandler(e.target.value, 2) }></input>
                <button className="confirmationButton" onClick={ (e) => this.submitHandler(e.target.value) } >Sum</button>
                <span className="resultsBox">Sum: { JSON.stringify(this.state.sum) }</span>
            </div>
        )
    }
}

export default Sum;