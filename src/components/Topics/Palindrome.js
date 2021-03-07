import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    changeHandler(val){
        this.setState({ userInput: val });
        //console.log(this.state.userInput);
    }

    submitHandler(){
        let initStr = this.state.userInput;
        let doneStr = '';
        let finalCheck = false;

        doneStr =  initStr.split("").reverse().join("");

        if( initStr === doneStr ){
            finalCheck = true;
        }
        else if ( initStr !== doneStr ){
            finalCheck = false;
        }

        this.setState({ palindrome: finalCheck });
        
    }


    render (){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => {this.changeHandler(e.target.value)} } ></input>
                <button className="confirmationButton" onClick={ (e) => { this.submitHandler(e.target.value) } } >Check</button>
                <span>Palindrome: { JSON.stringify(this.state.palindrome) } </span>
            </div>
        )
    }
}

export default Palindrome;