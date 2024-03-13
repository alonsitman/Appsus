const { useState, useEffect, useRef } = React
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [noteContentClicked, setNoteContentClicked] = useState(false)
    


    const editorRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then((notes) => {
                setNotes(notes)
                // showSuccessMsg(`Notes has been loaded successfuly`)
            })
            .catch((err) => {
                // showErrorMsg(`Note ${carId} removed failed`)
            })
    }

    function onRemoveNote(noteId) {
        noteService.removeNote(noteId)
            .then(() => {
                setNotes((prevNotes) => prevNotes.filter(note => note.id !== noteId))
                // showSuccessMsg(`Note ${noteId} has been removed successfuly`)
            })
            .catch((err) => {
                // showErrorMsg(`Note ${noteId} removed failed`)
            })
    }


    function onContentNoteClick(noteId) {
        setNoteContentClicked(true)
        //TODO remove the render of the note
    }


    function handleClickOutside(event) {
        console.log('The element now : ', event.targer)
        if (editorRef.current && !editorRef.current.contains(event.target)) {
            setNoteContentClicked(false)
            //TODO rerender the note
        }
    }


    if (!notes) return <React.Fragment>loading...</React.Fragment>
    return <section className="note-index">
        <h1>notes</h1>
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick} />
        {noteContentClicked &&
            <div>
                <div className="overlay"></div>
                <div className="note-editor" ref={editorRef}>
                    <form className="note-editor-preview">
                        <textarea className="header" type="text" placeholder="title"></textarea>
                        <textarea className="main" type="text" placeholder="note"></textarea>
                    </form>
                </div>

            </div>
        }
    </section>
}



// <section className="note-preview">
//         <section className="header" onClick={() => onContentNoteClick(note)}>
//             <p>{note.info.title}</p>
//         </section>
//         <section className="main" onClick={() => onContentNoteClick(note)}>
//             <p>{note.info.txt}</p>
//         </section>
//         <section className="footer">
//             <NotePreviewToolBar note={note} onRemoveNote={onRemoveNote} />
//         </section>
//         <section className="outerBtns">
//             <button className="btn selected-note-btn fa-solid fa-circle-check"></button>
//         </section>
//         <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>
//     </section>