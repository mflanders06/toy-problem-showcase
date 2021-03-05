import React, { Component } from 'react';

class FilterObjects extends Component{
    constructor(props){
        super(props);
        this.state = {
            unfilteredArray: [ { name: 'Mike', hair: false, title: 'technical support' }, { name: 'Hayden', age: 12, hair: true }, { name: 'Allison', pet: 'Kiki', age: 12 } ],
            userInput: '',
            filteredArray: []
        };
    }

    inputHandler(val){
        this.setState({ userInput: val })
        console.log(val);
    }

    submitHandler(){
        let filteredItems = [];

        for (let i = 0; i < this.unfilteredArray.length; i++){
            if ( this.unfilteredArray[i].hasOwnProperty(this.userInput) ){
                filteredItems.push(this.unfilteredArray[i]);
            }
        }

        this.setState({ filteredArray: filteredItems })

    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" >{ this.unfilteredArray }</span>
                <input className="inputLine" onChange={ (e) => {this.inputHandler(e.target.value)} }></input>
                <button className="confirmationButton" onClick={ (e) => {this.submitHandler()} }></button>
                <span className="resultsBox filterObjectRB" > { this.filteredArray } </span>
            </div>
        )
    }
}

export default FilterObjects;