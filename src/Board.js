import React, { Component } from 'react'

import Square from './Square'

class Board extends Component {
  renderSquare (i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} />
    )
  }
  render() {    
    let rows = []
    let cells = [];
    let cellNumber = 0;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        cells.push(this.renderSquare(cellNumber))
        cellNumber++
      }
      rows.push(<div key={i} className="board-row">{ cells }</div>)
      cells = [];
    }
    return (
      <div>
        {rows}
      </div>     
    )
  }
}

export default Board
