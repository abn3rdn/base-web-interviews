import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    value: [
      {
        "title": "This is my first note",
        "content": "This is my first note's content",
        "createdAt": 1612254268823,
        "id": "IUftu6N"
      }
    ],
  },
  reducers: {
    create: (state, action) => {
      state.value.push({
        title: action.payload.title,
        content: action.payload.content,
        createdAt: Date.now(),
        id: Math.floor(Math.random() * 100)
      })
    },
    update: (state, action) => {
      state.value[action.payload.index] = {
        ...state.value[action.payload.index],
        title: action.payload.title,
        content: action.payload.content
      }
    },
    delet: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  },
});

export const { create, update, delet } = notesSlice.actions;

export const selectNotes = state => state.notes.value;

export default notesSlice.reducer;
