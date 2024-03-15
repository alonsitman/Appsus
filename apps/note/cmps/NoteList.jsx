import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes, onRemoveNote, onContentNoteClick}) {
    
    return <ul className="note-list">
        {
            notes.map(note => <li  id={`li-${note.id}`} className="note-list-li" key={note.id} style={{backgroundColor: note.style.backgroundColor}}>
               <NotePreview note={note} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick}/>
            </li>)
        }
    </ul>
}
