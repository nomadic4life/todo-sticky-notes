import React, { Component } from 'react';
import './App.css';
import StickyNote from './Components/StickyContainer.js'
import styled from 'styled-components'

const Container = styled.div`
  ${props => console.log(props.testing)}
`


class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      setup: false,
      parentOffset: null,
    }
    this.refer = React.createRef();
  }

  componentDidMount() {
    console.log(this.testing, 'in here', this.refer.current.offsetLeft)
    this.setState({
      notes: [
        {isActive: false, id: 0},
        {isActive: false, id: 1},
        {isActive: false, id: 2},
        {isActive: false, id: 3},
        {isActive: false, id: 4},
        {isActive: false, id: 5},
        {isActive: false, id: 6},
        {isActive: false, id: 7},
        {isActive: false, id: 8},
        {isActive: false, id: 9},
        {isActive: false, id: 10},
        {isActive: false, id: 11},
        {isActive: false, id: 12},
        {isActive: false, id: 13},
        {isActive: false, id: 14},
        {isActive: false, id: 15},
        {isActive: false, id: 16},
        {isActive: false, id: 17},
        {isActive: false, id: 18},
        {isActive: false, id: 19}],
      setup: true,
      parentOffset:  this.refer.current.offsetWidth + this.refer.current.offsetLeft,
    })
  }

  changeActive = (e, sticky) => {
    if(sticky.isActive) return;

    let update = this.state.notes.map((note) => {
      if(note.id === sticky.id) {
        return {...note, isActive: true}
      } else {
        return {...note, isActive: false}
      }
    })

    this.setState({
      notes: [...update],
    })
  }

  render() {
    // console.log(this.refer, this.testing, 'in render')
    // console.log(this.state.setup)
    return (
      <div ref={this.refer} className="App">

        {/* <div ref={(pos) => this.testing = pos}  className='sticky-note'>
          <div className='header'></div>
        </div>
        <div ref={this.refer} className='sticky-note sticky-note2'>
          <div className='header'></div>
        </div> */}
        <StickyNote passingParent={this.state.parentOffset}
          changeActive={this.changeActive}
          notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
