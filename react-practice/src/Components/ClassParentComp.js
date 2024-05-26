import React, { Component } from 'react'
import ClassChildComp from './ClassChildComp'

export class ClassComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'prince',
      age: 20
    }
  }
  clickHanadler = () => {
    this.setState({ age: this.state.age + 1 })
  }
  render() {
    return (
      <div>
        <ClassChildComp age={this.state.age} />
        <button type='button' onClick={this.clickHanadler}>Change State</button>
      </div>
    )
  }
}

export default ClassComp
