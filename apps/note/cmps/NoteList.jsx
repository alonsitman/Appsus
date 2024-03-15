const { useEffect } = React
import { NotePreview } from "./NotePreview.jsx"

export function NoteList({ notes, onRemoveNote, onContentNoteClick, animate, isNoteJustAdded, setIsNoteJustAdded }) {

    return <ul className={`note-list ${animate ? 'animate__animated animate__bounceInDown' : ''}
                                     ${isNoteJustAdded ? 'note-just-added' : ''}                                                         `}>
        {
            notes.map(note => <li id={`li-${note.id}`} className="note-list-li" key={note.id} style={{ backgroundColor: note.style.backgroundColor }}>
                <NotePreview note={note} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick} />
            </li>)
        }
    </ul>
}
