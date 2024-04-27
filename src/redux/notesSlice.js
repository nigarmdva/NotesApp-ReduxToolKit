
import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({ id: action.payload.id, text: action.payload.text, important: false });
    },
    toggleImportance: (state, action) => {
      const note = state.find(note => note.id === action.payload);
      if (note) {
        note.important = !note.important;
      }
    }
  }
});

export const { addNote, toggleImportance } = notesSlice.actions;
export default notesSlice.reducer;
