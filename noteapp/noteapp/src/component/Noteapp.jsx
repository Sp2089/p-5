import React, { useState } from 'react';
import './NoteApp.css'; // Import the CSS file

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { text: noteText, timestamp: new Date().toLocaleString() }]);
      setNoteText('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="note-app">
      <h2>Notes</h2>
      <div className="note-input">
        <input
          type="text"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Enter your note here"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index} className="note-item">
            <p>{note.text}</p>
            <small>{note.timestamp}</small>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteApp;
