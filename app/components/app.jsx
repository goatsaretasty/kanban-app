import React from 'react'; 
import uuid from 'uuid'; 
import Notes from './notes';


  export default class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        notes: [
          {
            id: uuid.v4(), 
            task: 'Learn React'
          },
          {
            id: uuid.v4(),
            task: 'Do laundry'
          },
          {
            id: uuid.v4(),
            task: 'Learn goddammit'
          }
        ]
      };
    }

    render() {
      const {notes} = this.state; 

      return (
        <div>
        <button onClick={this.addNote}>
          + add note
        </button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
      );
    }

    addNote = () => {
      this.setState({
        notes: this.state.notes.concat([{
          id: uuid.v4(),
          task: 'Added task'
        }])
      });
    }

    deleteNote = (id, e) => {
      e.stopPropagation();

      this.setState({
        notes: this.state.notes.filter(note => note.id !== id)
      });
    }
  }