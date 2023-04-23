import React, {Component} from 'react';
class PersonCards extends Component{
    constructor(props){
        super(props)
            this.state = {
                age: this.props.age
            }
            
        

    }
    render(){
        return(
            <div>
                <h1>{this.props.lastName + ', ' + this.props.firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Haircolor: {this.props.haircolor}</h3>
                <button onClick={()=> this.setState({age: this.state.age + 1})}>Birthday button for {this.props.firstName} {this.props.lastName}</button>
                
            </div>
        )
    }
}
export default PersonCards