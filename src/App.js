import React, { Component } from 'react';
import Validation from './validation/Validation'
import Char from './char/Char'
import './App.css';

class App extends Component {
  state = {
    textValue:""
  }

  textlength = (e) => {
    
    this.setState({
      textValue : e.target.value
    })
  }

  goodbyeChrmander = (index) => {
    const text = this.state.textValue.split('')
    text.splice(index, 1)
    const newState = text.join('')
    this.setState({
      textValue: newState
    })
  }

  render() {

    let longEnough = 0

    if(this.state.textValue.length <= 7){
      longEnough = <h3>Text is to short</h3>
    }else{
      longEnough = <h3>Thext is long enough</h3> 
    }

    const charmander = this.state.textValue.split('').map((char, index) => {
      return (
        <Char 
          character={char} 
          key={index}
          click={() => this.goodbyeChrmander(index)}
        />
      )
    })

    return (
      <div className="App">
      <Validation
        lengthOfText={this.state.textValue.length} 
        longEnough = {longEnough}/>
        <p>{this.state.textValue}</p>
        <input 
          onChange={this.textlength} 
          value={this.state.textValue}>
        </input>
        <hr />
        {charmander}
      </div>
    );
  }
}

export default App;
