import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, toggleImportance } from "./redux/notesSlice";
import "./App.css"

function App() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      const newNoteId = Date.now(); // Yeni bir ID oluştur
      dispatch(addNote({ id: newNoteId, text: noteText }));
      setNoteText("");
    }
  };

  const handleToggleImportance = (id, currentImportance) => {
    dispatch(toggleImportance(id));
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <input
        type="text"
        placeholder="Enter your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button
              style={{ backgroundColor: note.important ? "green" : "red" }}
              onClick={() => handleToggleImportance(note.id, note.important)}
            >
              {note.important ? "Non Important" : "Important"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
