import { NotePreviewToolBar } from "./NotePreviewToolBar.jsx"

export function NotePreview({ note, onRemoveNote, onContentNoteClick}) {
    return <section className="note-preview">
        <section className="header" onClick={() => onContentNoteClick(note)}>
            <p>{note.info.title}</p>
        </section>
        <section className="main" onClick={() => onContentNoteClick(note)}>
            <p>{note.info.txt}</p>
        </section>
        <section className="footer">
            <NotePreviewToolBar note={note} onRemoveNote={onRemoveNote} />
        </section>
        <section className="outerBtns">
            <button className="btn selected-note-btn fa-solid fa-circle-check"></button>
        </section>
        <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>
    </section>
}