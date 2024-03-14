const { useState, useEffect, useRef } = React
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteEditor } from "../cmps/NoteEditor.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [noteContentClicked, setNoteContentClicked] = useState(false)
    const [editorHeaderValue, setEditorHeaderValue] = useState('')
    const [editorMainValue, setEditorMainValue] = useState('')
    

    const editorRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        loadNotes()
    }, [])

    function loadNotes() {
        noteService.query()
            .then((notes) => {
                setNotes(notes)
                console.log(`Notes has been loaded successfuly`)
            })
            .catch((err) => {
                console.log(`Note ${carId} removed failed`)
            })
    }

    function onRemoveNote(noteId) {
        noteService.removeNote(noteId)
            .then(() => {
                setNotes((prevNotes) => prevNotes.filter(note => note.id !== noteId))
                console.log(`Note ${noteId} has been removed successfuly`)
            })
            .catch((err) => {
                console.log(`Note ${noteId} removed failed`)
            })
    }

    // function onSaveNote(noteId) {
    //     noteService.saveNote(noteId)
    //     .then((notes) =>{
    //         setNotes((prevNotes) => prevNotes.map((note) => note === note.id))
    //     })
    // }


    function onContentNoteClick(note) {
        setNoteContentClicked(true)
        setEditorMainValue(note.info.txt)
        setEditorHeaderValue(note.info.title)
        //TODO remove the render of the note
    }


    function handleClickOutside(event) {
        console.log('The element now : ', event.target)
        console.log('editorRef.current', editorRef.current)
        if (editorRef.current && !editorRef.current.contains(event.target)) {
            setNoteContentClicked(false)
            //TODO rerender the note
        }
    }

    const handleEditorHeaderChange = (event) => {
        setEditorHeaderValue(event.target.value);
    }

    const handleEditorMainChange = (event) => {
        setEditorMainValue(event.target.value);
    }


    if (!notes) return <React.Fragment>loading...</React.Fragment>
    return <section className="note-index">
        <h1>notes</h1>
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick} />
        {noteContentClicked &&
            <div>
                <div className="overlay"></div>
                <NoteEditor 
                    editorHeaderValue={editorHeaderValue}
                    editorMainValue={editorMainValue}
                    handleEditorHeaderChange={handleEditorHeaderChange}
                    handleEditorMainChange={handleEditorMainChange}
                    editorRef = {editorRef}
                />
            </div>
        }
    </section>
}
