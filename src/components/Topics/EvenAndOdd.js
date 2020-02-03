import React, { Component } from 'react'

class EvenAndOdd extends Component {
 
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
assignEvenAndOdds(userInput){

   
   let meh = userInput.split('')
   let odds = []
   let evens = []
   for(let i = 0; i < meh.length; i++){
   if(meh[i] % 2 === 0){
   evens.push(parseInt(meh[i], 10))
   } else {
       odds.push(parseInt(meh[i], 10))
   }
}
this.setState({ evenArray: evens, oddArray: odds })
}

handleChange(value){
        this.setState({
          userInput: value
        })
      }

    render(){
        return(
        <div className="puzzleBox evenAndOddPB"><h4>Evens and Odds</h4>
            <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
            <button className="confirmationButton"  onClick={() => { this.assignEvenAndOdds(this.state.userInput)}}> SPLIT </button>
        <span className="resultsBox"> Evens: {this.state.evenArray }</span>
        <span className="resultsBox"> Odds: {this.state.oddArray }</span>
            
        </div>)
    }
    }
    

    
    
   // onClick={() => { this.assignEvenAndOdds(this.state.userInput)}


export default EvenAndOdd;