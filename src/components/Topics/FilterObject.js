import React, { Component } from 'react'

class FilterObjects extends Component {

//     constructor(){
//         super();
//         this.state ={
//         unFilteredArray: [
//             {name: 'Grace',
//             age: 20,
//             hobbie: "funs"
//              },

//             {   name: "Abby",
//                 age: 23,
//                 hobbie: "coding"
//             },

//             {   name: "Lilly",
//                 age: 16,
//                 hobbie: "school"
//             }
//         ],
//         userInput: "",
//         filteredArray: []
//     }
//     }

//     handleChange(value){
//         this.setState({
//           userInput: value
//         })
//       }

//       filteredArray(userInput) {
//         let names = this.state.names;
//         let filteredArray = [];
    
//         for ( let i = 0; i < names.length; i++ ) {
//           if ( names[i].includes(userInput) ) {
//             filteredArray.push(names[i]);
//           }
//         }
//         this.setState({ filteredArray: filteredArray });
//     }

//     render(){
//         return (
//           <div className="puzzleBox filterObjectPB">
//             <h4>Filter Object</h4>
//             <span className="puzzleText"> Original: { JSON.stringify(this.state.names, null, 10) } </span>
//             <input className="inputLine" onChange={ (event) => this.handleChange(event.target.value) }></input>
//             <button className="confirmationButton" onClick={ () => this.filteredArray(this.state.userInput) }>FILTER</button>
//             <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
//             </div>
//         )
//     }
// }


constructor() {
    super();

      this.state ={
        employees: [
                    {name: 'Grace',
                    age: 20,
                    hobbie: "funs"
                     },
        
                    {   name: "Abby",
                        age: 23,
                        hobbie: "coding"
                    },
        
                    {   name: "Lilly",
                        age: 16,
                        hobbie: "school"
                    }
                ],

      userInput: '',
      filteredEmployees: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterEmployees(prop) {
    let employees = this.state.employees;
    let filteredEmployees = [];

    for ( let i = 0; i < employees.length; i++ ) {
      if ( employees[i].hasOwnProperty(prop) ) {
        filteredEmployees.push(employees[i]);
      }
    }

    this.setState({ filteredEmployees: filteredEmployees });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}
export default FilterObjects