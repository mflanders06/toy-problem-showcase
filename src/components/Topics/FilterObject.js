import React, { Component } from 'react';

class FilterObjects extends Component{
    constructor(){
        super();
        this.state = {
            unfilteredArray: [ { name: 'Mike', hair: false, title: 'technical support' }, { name: 'Hayden', age: 12, hair: true }, { name: 'Allison', pet: 'Kiki', age: 12 } ],
            userInput: '',
            filteredArray: []
        };
    }

    inputHandler(val){
        this.setState({ userInput: val })
        //console.log(val);
    }

    submitHandler(){
        let filteredItems = [];
        let people = this.state.unfilteredArray;
        console.log(this.state.userInput);

        for (let i = 0; i < people.length; i++){
            if ( people[i].hasOwnProperty(this.state.userInput) ){
                filteredItems.push(people[i]);
            }
        }
        console.log(filteredItems);
        this.setState({ filteredArray: filteredItems })

    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" >Original: { JSON.stringify( this.state.unfilteredArray ) }</span>
                <input className="inputLine" onChange={ (e) => {this.inputHandler(e.target.value)} }></input>
                <button className="confirmationButton" onClick={ (e) => {this.submitHandler()} }> Filter </button>
                <span className="resultsBox filterObjectRB" >Filtered: { JSON.stringify( this.state.filteredArray ) } </span>
            </div>
        )
    }
}

export default FilterObjects;