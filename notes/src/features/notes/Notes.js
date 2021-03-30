import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  create,
  update,
  delet,
  selectNotes,
} from './notesSlice';
import './Notes.css';

const EditModal = ({ note, show, onClose, onEdit }) => {
  const [editNote, setEditnote] = useState(note);

  useEffect(() => {
    setEditnote(note)
  }, [note]);

  if(!show) {
    return null;
  }
  
  return (
    <div className="notes-edit">
      <h2>Edit</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          onChange={e => setEditnote({...editNote, title: e.target.value})}
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <input
          id="content"
          onChange={e => setEditnote({...editNote, content: e.target.value})}
        />
      </div>
      <br/>
      <button 
          onClick={() =>{ onEdit(editNote); onClose(); }}
      >
        Edit
      </button>
      <button 
          onClick={() => onClose()}
      >
        Cancel
      </button>
    </div>
  )
}

const NotesList = ({notes, onEdit}) => {
  const dispatch = useDispatch();

  return notes.map((note, index) => {
    return (
      <li className="notes-item" 
        key={index}
      >
        <h4>{note.title}</h4>
        <p>{note.content}</p>
        <button 
          onClick={
            ()=>onEdit(index)
          }
        >
          Edit
        </button>
        <button
           onClick={
            ()=>dispatch(delet(index))
          }
        >
          Delete
        </button>
      </li>
    )
  });
};

export function Notes() {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes);
  const [newNote, setNewNote] = useState({
    title: '',
    content: ''
  });
  const [editNote, setEditNote] = useState(undefined);
  const [showModal, setShowModal] = useState(false);
  
  const handleEdit = (i) => {
    setEditNote({
      title: notes[i].title,
      content: notes[i].content,
      index: i
    });
    setShowModal(true);
  };

  const runEdit = (editedNote) => {
    dispatch(update(editedNote))
  }

  const handleAddNote = () => {
    dispatch(create(newNote));
    setNewNote('');
  }

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div className='notes'>
        <div className="notes-add">
        <h1>Notes</h1>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={newNote.title}
              onChange={e => setNewNote({...newNote, title: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <input
              id="content"
              value={newNote.content}
              onChange={e => setNewNote({...newNote, content: e.target.value})}
            />
          </div>
          <button 
             onClick={() => handleAddNote()}
          >
            Add note
          </button>
        </div>
        <div className='notes-list'>
          <NotesList notes={notes} onEdit={handleEdit} />
          <EditModal show={showModal} note={editNote} onClose={handleClose} onEdit={runEdit}/>
        </div>
      </div>
    </div>
  );
}
