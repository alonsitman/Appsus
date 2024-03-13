import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes, onRemoveNote, onContentNoteClick}) {
    
    function onClickEdit(note){
        console.log('Editing the note :', note.id)
    }

    return <ul className="note-list">
        {
            notes.map(note => <li onClick={() => onClickEdit(note)} className="note-list-li" key={note.id}>
               <NotePreview note={note} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick}/>
            </li>)
        }
    </ul>
}
