 import React from "react";

 class ChangeData extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            mess:'Hehe'
        }
    
    }

    handleChange =() =>{
        this.setState({mess :'HIHi'});
    }
    reset =() =>{
        this.setState({mess :'Hehe'});
    }

    render(){
        return(
            <>
            <p>Data: {this.state.mess}</p>
            <button type="button" onClick={this.handleChange}>Change</button>
            <button type="button" onClick={this.reset}>Reset</button>
            </>
        )
    }

 }

 export default ChangeData;
