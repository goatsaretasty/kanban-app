import React from 'react';
import Note from './Note';
import Editable from './editable';  

export default ({
  notes, 
  onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}}) => (
  <ul>{notes.map(({id, editing, task}) =>
  <li key={id}>
    <Note onClick={onNoteClick.bind(null, id)}> 
      <Editable
        editing={editing}
        value={task}
        onEdit={onEdit.bind(null, id)} />
      <button onClick={onDelete.bind(null, id)}>X</button>
    </Note>
  </li>
  )}</ul>
)

console.log('testing"');