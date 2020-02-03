import React, { Component } from 'react'

class Palindrome extends Component{


    constructor(){
        super();

        this.state = {
            palindrome: "",
            userInput: ""
        }
    }

    handleChange(value){
        this.setState({
          userInput: value
        })
      }

      isPalindrome(userInput){
        let forwards = userInput;
        let backwards = userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');
    
        if ( forwards === backwards ) {
          this.setState({ palindrome: 'true' });
        } else {
          this.setState({ palindrome: 'false' });
        }
          
      }

    render(){
        return(
        <div className="puzzleBox filterStringPB"><h4>Palindrome</h4>
            <input className="inputLine" onChange={(event) => this.handleChange(event.target.value)}></input>
            <button className="confirmationButton"  onClick={ () => this.isPalindrome(this.state.userInput) }> CHECK </button>
        <span className="resultsBox">Palindrome:{this.state.palindrome}</span>
        
        </div>
        )
    }
}

export default Palindrome