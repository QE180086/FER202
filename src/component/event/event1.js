import React from "react";
class Event01 extends React.Component { 
    constructor(props){
        super(props);
        this.state.mess= '';

    }
        
      handleChange = () =>{
            console.log('Changed')
        }


    render(){
        return(
            <>
           <h1>ATula</h1>
           <input placeholder="Enter data">{this.state.mess}</input>
           <button onClick={this.handleChange}>Click here</button>
            </>
        )
    }
}

export default Event01;