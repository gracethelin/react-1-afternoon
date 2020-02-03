// import React, { Component } from 'react'

// class FilterString extends Component {

//     constructor(){
//         super(),
//         this.state = {
//             names: ['Grace', "Abby", 'Lilly', 'Vanessa', 'Jason', "Tanner", 'Jackson'],
//             userInput: "",
//             filteredArray: []
//         }
//     }

//     updateUserInput = (e) => {
//         this.setState({
//             userInput: e.target.value,
//         })
//     }

//     searchArray = () => {
//         let results = this.state.names.filter(e => e.includes(this.state.userInput))
//         this.setState({
//             filteredArray: results
//         })
        
//     }

// render(){
//     return (
//         <div className="puzzleBox filterStringPB">
//         <h4>Filter String</h4>
//         <span className="puzzleText">{JSON.stringify(this.state.names)}</span>
//         <input 
//         className="inputLine"
//         onChange={(e) => this.updateUserInput(e)}>
//         </input>
//         <button className="confirmationButton" onClick={() => this.searchArray()}>FILTER</button>
//         <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filter)}</span>
//         </div>
//     )
// }

// }

// export default FilterString

import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
      names: ['Grace', "Abby", 'Lilly', 'Vanessa', 'Jason', "Tanner", 'Jackson'],
      userInput: '',
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    let names = this.state.names;
    let filteredNames = [];

    for ( let i = 0; i < names.length; i++ ) {
      if ( names[i].includes(userInput) ) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
}
