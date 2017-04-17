import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player_x: 'x',
      player_o: 'o',
      player: 'x',
      winner: null,
      board: [
        '', '', '', '', '', '', '', '', ''
      ]
    }
  }

  checkPlay () {
    const player = this.state.player
    const cells = this.state.board
    const wins =[[0,1,2], [3,4,5], [6,7,8],
                  [0,3,6], [1,4,7], [2,5,8],
                  [0,4,8], [2,4,6]]


  return wins.find(combo => {
    if (cells[combo[0]] !== "" && cells[combo[1]] !== "" && cells[combo[2]]  !== "" &&
        cells[combo[0]] === cells[combo[1]] && cells[combo[1]] === cells[combo[2]]) {
          console.log('Player '+player + ' is a winner');
          return player
        }
        else {
          return false
      }
    })
  }

  handleClick(index) {
    if(this.state.board[index] === '') {
      this.state.board[index] = this.state.player
      this.setState({
        board: this.state.board,
        player: this.state.player_x === this.state.player ?
        this.state.player_o : this.state.player_x,
        winner: this.checkPlay() ? this.state.player : null
      })
    }
    console.log(index);
  }

  render() {
    return (
      <div className="App">
        <div className="board">
          {this.state.board.map((cell, index) => {
            return (
            <div className="cell" key={index}
            data-cell-id={index} onClick={() => {
              this.handleClick(index)}}>
              {cell}
            </div>
          )
        })}
        </div>
          { this.state.winner ?
            <h1 className="winner">{`The winner is ${this.state.winner}`}
            </h1> : null
          }
      </div>
    );
  }
}

export default App;
