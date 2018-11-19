import React from 'react'
import styled from 'styled-components'

const StickyDiv = styled.div`

${props => props.colorSelect % 7 === 0 ? 'background:  #FFF2AB;': null}
${props => props.colorSelect % 7 === 1 ? 'background:  #CBF1C4;': null}
${props => props.colorSelect % 7 === 2 ? 'background:  #FFCCE5;': null}
${props => props.colorSelect % 7 === 3 ? 'background:  #E7CFFF;': null}
${props => props.colorSelect % 7 === 4 ? 'background:  #CDE9FF;': null}
${props => props.colorSelect % 7 === 5 ? 'background:  #F9F9F9;': null}
${props => props.colorSelect % 7 === 6 ? 'background:  #444444; color: white;': null}

width: 300px;
height: 330px;
position: absolute;
z-index: ${props => props.isActive ? 1 : 0}
-webkit-box-shadow: -6px -9px 49px -18px rgba(0,0,0,0.53);
-moz-box-shadow: -6px -9px 49px -18px rgba(0,0,0,0.53);
box-shadow: -9px -6px 21px -15px rgba(0,0,0,0.53);
overflow: hidden;

${props => props.isActive ? `.header-container::before {
  content: '__';
  position: absolute;
  top: 9px;
  left: 12px;
  border: 1px solid lightgray;
  padding: 2px 4px 17px;
  line-height: 0;
  font-weight: 1000;
  cursor: pointer;
}` : null}

.header { 
  ${props => props.colorSelect % 7 === 0 ? 'background:  #FFEB81;': null}
  ${props => props.colorSelect % 7 === 1 ? 'background:  #AFECA4;': null}
  ${props => props.colorSelect % 7 === 2 ? 'background:  #FFBBDD;': null}
  ${props => props.colorSelect % 7 === 3 ? 'background:  #DBB7FF;': null}
  ${props => props.colorSelect % 7 === 4 ? 'background:  #B7DFFF;': null}
  ${props => props.colorSelect % 7 === 5 ? 'background:  #E5E5E5;': null}
  ${props => props.colorSelect % 7 === 6 ? 'background:  #3E3E3E; color: white;': null}

  padding: 5px 0;
  line-height: 1;
  margin: 0;
  font-size: 28px;
  text-align: center;
}

.content {
  padding: 10px 20px;
  text-align: left;
  overflow: hidden;
  height: 75%;
}

ul {
  margin: 3px 0;
  padding: 0px;
  overflow: hidden;
}

li {
  list-style: none;
  margin: 10px;
  line-height: 1;
  font-size: 24px;
}
  top: ${props => (Math.floor(props.posY / 6) * 360) + (props.posY % 6 * 15)}px;
  left: ${props => props.posX % 6 * 195}px;

  ${props => props.isActive ? `top: 100px; left: 400px; box-shadow: 0px 35px 300px 160px rgba(20,46,51,0.63); height: auto;` : null}

`

let testing = null;
const StickyNote = props => {
  let y = 15;
  let x = 195;  

  console.log(props.passingParent, 'in child')

  return (
    <React.Fragment>
      { props.notes.map( note => {
        return (
          <StickyDiv onClick={(e) => props.changeActive(e, note)} isActive={note.isActive} passin={props.passingParent} posY={note.id} posX={note.id} colorSelect={note.id}>
            <div className='header-container'>
              <h1 className='header'>Title</h1>
            </div>
            <div className='content'>
              <ul>
                <li>list of todo</li>
                <li>list of todo's</li>
                <li>list of todo's</li>
                <li>list of todo's</li>
                <li>list of todo's</li>
                <li>list of todo's</li>
                <li>list of todo's</li>
              </ul>
            </div>
          </StickyDiv>
        );
      })}
    </React.Fragment>
  );
}

export default StickyNote;