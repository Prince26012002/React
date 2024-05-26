import React, { Component } from 'react'

export default class ClassChildComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { age } = this.props;
        return (
            <div>
                ClassChildComp {age}
            </div>
        )
    }
}
