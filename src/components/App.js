import React, { Component } from 'react';
import War from './War'
import Home from './Home'

const API = "http://localhost:3001/dragons"
class App extends Component {

  state = {
    dragons: [],
    warDragon: [],
    search: ''
  }

  componentDidMount = () => {
    this.fetchDragons()
  }

  fetchDragons = () => {
    fetch(API)
    .then(res => res.json())
    .then(dragons => {
      this.setState({
        dragons: dragons
      })
    })
  }

  handleClick = (dragon) => {
    console.log(dragon)
    this.setWarDragons(dragon)
  }

  setWarDragons = (dragon) => {
    this.setState({
      warDragon: [...this.state.warDragon, dragon]
    })
  }
  
  removeWarDragon = (dragon) => {
    let index = this.state.warDragon.indexOf(dragon)
    let temp = this.state.warDragon
    temp.splice(index, 1)
    this.setState({
      warDragon: temp
    })
  }

  changeSearch = (e) => {
    this.setState({search: e.target.value})
  }
 
  render() {
    return (
      <div>
        <Home changeSearch={this.changeSearch} search={this.state.search} dragons={this.state.dragons} warDragon={this.state.warDragon} onClick={this.handleClick}/>
        <War warDragon={this.state.warDragon} removeWarDragon={this.removeWarDragon}/>
      </div>
    );
  }
}

export default App;
