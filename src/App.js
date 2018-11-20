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
      inputText: '',
      inputSticky: '',
    }
    this.refer = React.createRef();
  }

  componentDidMount() {
    console.log(this.testing, 'in here', this.refer.current.offsetLeft)
    this.setState({
      notes: [],
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

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleAddTodo = (e) => {
    e.preventDefault()
    if(this.state.inputText === '') return;
    let isUpdate = false

    let update = this.state.notes.map( (note, i) => {
      if(note.isActive) {
        isUpdate = true;
        return {...note, todo: [...note.todo, {completed: false, id: Date.now(), text: this.state.inputText}]}
      } else{
        console.log(this.state.notes.length-1, i)
        return this.state.notes.length - 1 !== i || (isUpdate && this.state.notes.length - 1 === i) ? {...note, isActive: false} : {...note, isActive: true, todo: [...note.todo, {completed: false, id: Date.now(), text: this.state.inputText}]}
      } 
    })

    console.log('update todo', update)


    this.setState({
      notes: [...update],
      inputText: '',
    })
    // if(update.length !== 0) {
    //   update = update.reduce(note => {return {...note, todo: [...note.todo, {completed: false, id: Date.now(), text: inputText}]}})
    // }
    // console.log(update)
  }

  handleAddSticky = (e) => {
    e.preventDefault()
    if(this.state.inputSticky === '') return;

    let update = [...this.state.notes,{isActive: false, id: this.state.notes.length, category: this.state.inputSticky, todo: []}]

    this.setState({
      notes: [...update],
      inputSticky: '',
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

        <div className='sidebar'>

          <form onSubmit={(e) => this.handleAddSticky(e)}>
            <input type={'text'} 
              placeholder='sticky...'
              name='inputSticky'
              value={this.state.inputSticky}
              onChange={this.handleOnChange}></input>
            <button type='submit'>Add New Sticky</button>
          </form>

          <form onSubmit={(e) => this.handleAddTodo(e)}>
            <input type={'text'} 
              placeholder='add todo...'
              name='inputText'
              value={this.state.inputText}
              onChange={this.handleOnChange}></input>
            <button type='submit'>Add Todo</button>
            <button>Clear Completed</button>
          </form>

        </div>
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
