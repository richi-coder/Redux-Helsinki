import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";

function Note({note, handleClick}) {
    
    return (
        <li onClick={handleClick}>
          {note.content} <strong>{note.important ? "important" : ""}</strong>
        </li>
    )
}

function Notes() {
    const dispatch = useDispatch();
    const notes = useSelector(state => state)
  return (
    <ul>
      {notes.map((note) => (
        <Note 
        key={note.id}
        handleClick={() => dispatch(toggleImportanceOf(id))}
        note={note}
        />
      ))}
    </ul>
  );
}

export default Notes;
