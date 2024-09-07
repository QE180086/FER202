import logo from './logo.svg';
import './App.css';
import Event01 from './component/event/event1';
import ChangeData from './component/state/ChangeData';
import React, { Component } from 'react';
import Coun from './component/state/Counter';
import Show from './component/state/Show';
import HandleForm from './component/state/HandleForm';
// COUTER
// class Counter extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:0
//     };
//   }
// increaseCount= ()=>{
//     this.setState({count: this.state.count+1});
// }

// render(){
//   return (
//     <div >
//     <h2>Count : {this.state.count}</h2>
// <button onClick={this.increaseCount}> Up</button>
//     </div>
//   )
// }

// }

// form nhập
class DisplayMessage extends Component {
  render(){
   return(
   <p> message: {this.props.message}</p>
   )
  }
 }

class Hihi extends Component{
  constructor(props){
    super(props);
    this.state={
      message:""
    };
  }
  handleChange  = (a) =>{
    this.setState({message: a.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        
        <DisplayMessage message={this.state.message} />
      </div>
    );
  }x
};



function App() {
  return (
   <>

    <HandleForm></HandleForm>
   </>
  )
}


export default App;
