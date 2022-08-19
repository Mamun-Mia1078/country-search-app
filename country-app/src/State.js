import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    dicrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    
  render() {
    const {count} = this.state;
    return (
      <div> 
        <h1> count: {count} </h1>
        <button onClick={this.increment}> + </button>
        <button onClick={this.dicrement}> - </button>

      </div>
    )
  }
}

