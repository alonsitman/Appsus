import { NotePreviewToolBar } from "./NotePreviewToolBar.jsx"

export function NotePreview({ note }) {
    return <section className="note-preview">
        <section className="header">
            <p>{note.info.title}</p>
        </section>
        <section className="main">
            <p>{note.info.txt}</p>
        </section>
        <section className="footer">
            <NotePreviewToolBar/>
        </section>
        <section className="outerBtns">
            <button className="btn selected-note-btn fa-solid fa-circle-check"></button>
        </section>
        <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>
    </section>
}