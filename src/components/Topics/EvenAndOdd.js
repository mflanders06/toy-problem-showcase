import React, { Component } from 'react';

class EvenAndOdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(val){
        this.setState({userInput: val});
        //console.log(val);
    }

    assignEvenAndOdds(userInput){
        let arr = userInput.split(',');
        let even = [];
        let odd = [];

        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 === 0){
                even.push(arr[i]);
            }
            else if (arr[i] % 2 === 1){
                odd.push(arr[i]);
            }
        }
        this.setState({ evenArray: even });
        this.setState({ oddArray: odd });
    }

    render () {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) } }>Split</button>
                <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) } </span>
            </div>
        )
    }
}

export default EvenAndOdd