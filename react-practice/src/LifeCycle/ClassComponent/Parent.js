import React, { Component } from 'react'
import ChildOne from './ChildOne';

export class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show : true,
            value: 0,
        }
        this.update = this.updateValue.bind(this)
        console.log("Parent Constructor");
    }

    updateValue(nextValue) {
        this.setState(nextValue)
    }
    
    clickHandler = () => {
        this.setState({show : !this.state.show})
    }

    componentDidMount() {
        console.log("Parent Component mounted");
    }

    componentDidUpdate(){
        console.log("Parent Component updated");
    }

    render() {
        console.log("Parent Component rendered");
        return (
            <div>
               Parent Component {this.state.value}
               <button type='button' onClick={this.clickHandler}>Toggle State</button>
               {/* {this.state.show && <ChildOne value={this.state.value} fun = {() => this.setState({value : this.state.value + 1})}/>}  */}
               {this.state.show && <ChildOne value={this.state.value} fun = {this.update}/>} 
            </div>
        )
    }
}

export default Parent
