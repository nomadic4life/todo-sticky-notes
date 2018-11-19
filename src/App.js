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
        {isActive: false, id: 0, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: true},
          {id: 1, text: 'this is what I need to do', completed: false},
          {id: 2, text: 'some different information here', completed: false},
          {id: 3, text: 'this app is goign to look so cool after completed', completed: false},
          {id: 4, text: 'this is what I need to do', completed: false},]},
        {isActive: false, id: 1, category: 'Title', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 2, category: 'Developers', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 3, category: 'Weed', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 4, category: 'youtube', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 5, category: 'wow', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 6, category: 'Make this a long one', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 7, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 8, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: true}]},
        {isActive: false, id: 9, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 10, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 11, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 12, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 13, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 14, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 15, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 16, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 17, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 18, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]},
        {isActive: false, id: 19, category: 'Games', todo: [{id: 0, text: 'this is what I need to do', completed: false}]}],
      setup: true,
      parentOffset:  this.refer.current.offsetWidth + this.refer.current.offsetLeft,
    })
  }

  changeComplete = (e, activeId, lineId) => {
    let update = this.state.notes.map( note => {
      if(note.id === activeId) return {...note, todo: note.todo.map(list => list.id === lineId ? {...list, completed: !list.completed}  : list )}
      else return note
    })

    this.setState({
      notes: [...update],
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

  hide = (e, sticky) => {
    let update = this.state.notes.map((note) => {
      if(note.id === sticky.id) {
        return {...note, isActive: false}
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

        <div className='sidebar'></div>
        <div className='container'>
          <div className='heading'> <h1>Sticky Notes - Todo List</h1></div>
          <div className='sticky-container'>
          <StickyNote passingParent={this.state.parentOffset}
            changeActive={this.changeActive}
            changeComplete={this.changeComplete}
            hide={this.hide}
            notes={this.state.notes}/>
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
