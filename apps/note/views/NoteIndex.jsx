const { useState, useEffect, useRef } = React
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteEditor } from "../cmps/NoteEditor.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [noteContentClicked, setNoteContentClicked] = useState(false)
    const [currentEditedNoteValues, setCurrentEditedNoteValues] = useState(noteService.getEmptyNote())
    const [selectedNote, setSelectedNote] = useState('')


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


    function onSaveNote(newNote) {
        console.log('trying saving note!!', newNote.id)
        if (newNote) {
            noteService.saveNote(newNote)
                .then(() => {
                    setNotes((prevNotes) => prevNotes.map((note) => note.id === newNote.id ? { ...note, ...newNote } : note))
                })
        }
    }


    function onContentNoteClick(event, note) {
        event.stopPropagation()
        console.log('currect edited note values', note)

        setNoteContentClicked(true)
        setCurrentEditedNoteValues((prevNote) => prevNote = note)
        console.log('The noteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',currentEditedNoteValues)
        //TODO remove the render of the note
    }

    function handleClickOutside(event) {
        if (editorRef.current && !editorRef.current.contains(event.target)) {
            setNoteContentClicked(false)
            onSaveNote(currentEditedNoteValues)
            //TODO rerender the note
        }
    }

    const handleEditorChange = ({ target }) => {
        setCurrentEditedNoteValues(prevEditedNoteValues =>
            ({ ...prevEditedNoteValues, info: { ...prevEditedNoteValues.info, [target.name]: target.value } }))
    } 


    if (!notes) return <React.Fragment>loading...</React.Fragment>
    return <section className="note-index">
        <h1>notes</h1>
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick} />
        {noteContentClicked &&
            <div>
                <div className="overlay"></div>
                <NoteEditor
                    editorRef={editorRef}
                    noteContentClicked={noteContentClicked}
                    currentEditedNoteValues={currentEditedNoteValues}
                    handleEditorChange= {handleEditorChange}
                />
            </div>
        }
    </section>
}
