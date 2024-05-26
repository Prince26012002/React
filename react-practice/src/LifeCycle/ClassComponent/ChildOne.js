import React, { Component } from 'react'

export class ChildOne extends Component {
    constructor(props) {
        super(props);
        console.log("Child Constructor");
        // this.state = {
        //     value : props.value,
        // }
    }

    componentDidMount() {
        console.log("Child Component mounted");
    }
    componentDidUpdate() {
        console.log("Child Component updated");
    }
    componentWillUnmount(){
        console.log("Child Component will unmount");
    }

    increment = () => {
        // this.setState({value : this.state.value + 1})
        this.props.fun({value : this.props.value + 1})
    }
    render() {
        console.log("Child Component rendered");
        return (
            <div>
              Child Component {this.props.value}
              {/* <button type='button' onClick = {this.props.fun}>Value Change</button> */}
              <button type='button' onClick = {() => this.props.fun({value : this.props.value + 1})}>Value Change</button>
            </div>
        )
    }
}

export default ChildOne
