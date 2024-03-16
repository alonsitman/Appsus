import { NotePreviewToolBar } from "./NotePreviewToolBar.jsx"

    

export function NotePreview({ note, onRemoveNote, onContentNoteClick, setColorPicker, onChangeColor, onDuplicateNote}) {
    return <section className="note-preview">
        <section className="header" onClick={(event) => onContentNoteClick(event,note)}>
            <p>{note.info.title}</p>
        </section>
        <section className="main" onClick={(event) => onContentNoteClick(event,note)}>
            <p>{note.info.txt}</p>
        </section>
        <section className="footer">
            <NotePreviewToolBar note={note} onRemoveNote={onRemoveNote} setColorPicker={setColorPicker} onChangeColor={onChangeColor} onDuplicateNote={onDuplicateNote}/>
        </section>
        <section className="outerBtns">
            <button className="btn selected-note-btn fa-solid fa-circle-check"></button>
        </section>
        <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>
    </section>
}