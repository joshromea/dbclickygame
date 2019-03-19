import React, { Component } from 'react';
import characters from './characters.json'
import CharacterCard from './components/CharacterCard'
import Header from './components/Header'
import Wrapper from './components/Wrapper'
import './App.css';


class App extends Component {
  state = {
    characters,
    text: 'Click image to begin. You win when your score is 8.',
    chosenChar: [],
    score: 0
  }

  imageClick = event => {
    const currentPick = event.target.alt
    const CharPicked = this.state.chosenChar.indexOf(currentPick) > -1;

    if (CharPicked) {
      this.setState({
        character: this.state.characters.sort((i, j) => {
          return 0.5 - Math.random()
        }),
        chosenChar: [],
        score: 0,
        text: 'YOU LOSE! CLICK IMAGE TO PLAY AGAIN!'
      })
    } else {
      this.setState(
        {
          character: this.state.characters.sort((i, j) => {
            return 0.5 - Math.random()
          }),
          chosenChar: this.state.chosenChar.concat(currentPick),
          score: this.state.score + 1,
          text: 'GOOD JOB KEEP GOING!'
        },
        () => {
          if (this.state.score === 8) {
            this.setState({
              character: this.state.characters.sort((i, j) => {
                return 0.5 - Math.random()
              }),
              chosenChar: [],
              score: 0,
              text: 'YOU WIN! ClICK IMAGE TO PLAY AGAIN!'
            })
          }
        }
      )
    }
  }

  render() {
    return (
      <div>
        <Header
          text={this.state.text}
          score={this.state.score}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              imageClick={this.imageClick}
              id={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
    )
  }
}

export default App;
