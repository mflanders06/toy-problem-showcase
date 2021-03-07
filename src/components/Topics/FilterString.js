import React, { Component } from 'react';


class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            unfilteredArray: ['Happy', 'Dopey', 'Doc', 'Sleepy', 'Grumpy', 'Bashful', 'Sneezy', 'Snow White', 'The Wicked Queen'],
            userInput: '',
            filteredArray: []
        }
    }

    inputHandler(val){
        this.setState({ userInput: val });
    }

    filteringArray(){
        let initArray = this.state.unfilteredArray;
        let initInput = this.state.userInput;
        let doneArray = [];

        console.log(initArray);

        for (let i = 0; i < initArray.length; i++){
            if (initArray[i].includes(initInput)){
                doneArray.push(initArray[i]);
            }
        }

        this.setState({ filteredArray: doneArray })
    }

    render(){
        return(
           <div className="puzzleBox filterStringPB">
               <h4>Filter String</h4>
               <span className="puzzleText">Unfiltered Array: { JSON.stringify( this.state.unfilteredArray ) }</span>
               <input className="inputLine" onChange={ (e) => {this.inputHandler(e.target.value)} } ></input>
               <button className="confirmationButton" onClick={ (e) => {this.filteringArray(e.target.value)} } >Filter</button>
               <span className="resultsBox filterStinrgRB">Filtered Array: { JSON.stringify( this.state.filteredArray ) }</span>

           </div>
        )
    }
}

export default FilterString;