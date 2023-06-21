import React, { Component } from 'react'

import Board from './board';

export default class App extends Component {
 board = ["X","X","X","X","X","X","X","X","X"]

  render() {
    return (
      <div className='App'>
         <Board BoxBoard={this.board} onClick={this.handleClick}/>
      </div>
    )
  }
}
