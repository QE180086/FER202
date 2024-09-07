import React from "react";

class Coun extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    Increase = () =>{
        this.setState({
            count: this.state.count +1
        });
        if(this.state.count>=5){
            alert("Vuot qua so luong cho phep");
            this.setState({
                count:5
            })
        }
    }
    Decrease = () =>{
        this.setState({
            count: this.state.count -1
        })
        if(this.state.count<=0){
            alert("So luong khong hop li");
            this.setState({
                count:0
            })
        }
    }


    render(){
        return(
            <>
            <h1> Count: {this.state.count}</h1>
            <button type="button" onClick={this.Increase}>Up</button>
            <button type="button" onClick={this.Decrease}>Down</button>
            </>
        )
    }

}

export default Coun