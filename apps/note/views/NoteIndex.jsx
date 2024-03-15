const { useState, useEffect, useRef } = React
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteEditor } from "../cmps/NoteEditor.jsx"
import { NoteCreator } from "../cmps/NoteCreator.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [noteContentClicked, setNoteContentClicked] = useState(false)
    const [currentEditedNoteValues, setCurrentEditedNoteValues] = useState(noteService.getEmptyNote())


    const editorRef = useRef(null)

    useEffect(() => {
        loadNotes()
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
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
        const elLi = document.getElementById(`li-${noteId}`);
        console.log('elli', elLi)
        if(elLi){
            elLi.classList.add('animate__backOutRight', 'animate__animated')
        }
        setTimeout(() => {
            noteService.removeNote(noteId)
            .then(() => {
                setNotes((prevNotes) => prevNotes.filter(note => note.id !== noteId))
                console.log(`Note ${noteId} has been removed successfuly`)
            })
            .catch((err) => {
                console.log(`Note ${noteId} removed failed`)
            })
        },300)
    }


    function onSaveNote(newNote) {
        console.log('Enter onSaveNote ', newNote)
        if (newNote) {
            noteService.saveNote(newNote)
                .then(() => {
                    setNotes((prevNotes) => prevNotes.map((note) => note.id === newNote.id ? { ...note, ...newNote } : note))
                    
                })
        }
    }


    function onContentNoteClick(event, selectedNote) {
        console.log('Enter onContentNoteClick',  selectedNote)
        event.stopPropagation()
        setNotes((prevNotes => prevNotes.filter((note) => note.id != selectedNote.id)))
        setNoteContentClicked(true)
        setCurrentEditedNoteValues({ ... selectedNote })
        //TODO remove the render of the note
    }

    function handleClickOutside(event) {
        console.log('Enter handleClickOutside')
        if (editorRef.current && !editorRef.current.contains(event.target)) {
            console.log(currentEditedNoteValues)
            setNoteContentClicked(false)
            loadNotes(currentEditedNoteValues.id)
            //TODO rerender the note
        }
    }

    const handleEditorChange = ({ target }) => {
        console.log('Enter handleEditorChange ', target.value)
        setCurrentEditedNoteValues(prevEditedNoteValues => 
            ({ ...prevEditedNoteValues, info: { ...prevEditedNoteValues.info, [target.name]: target.value } }))
        
        onSaveNote(currentEditedNoteValues)
        console.log('currentValues', currentEditedNoteValues)
    }


    if (!notes) return <React.Fragment>loading...</React.Fragment>
    return <section className="note-index">
        <NoteCreator/>
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick}  animate={!noteContentClicked} />
        {noteContentClicked &&
            <div>
                <div className="overlay"></div>
                <NoteEditor
                    editorRef={editorRef}
                    noteContentClicked={noteContentClicked}
                    currentEditedNoteValues={currentEditedNoteValues}
                    handleEditorChange={handleEditorChange}
                    onRemoveNote={onRemoveNote}
                    setNoteContentClicked = {setNoteContentClicked}
                />
            </div>
        }
    </section>
}

