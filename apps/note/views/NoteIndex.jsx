const { useState, useEffect, useRef } = React
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"
import { NoteEditor } from "../cmps/NoteEditor.jsx"
import { NoteCreator } from "../cmps/NoteCreator.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { utilService } from "../../../services/util.service.js"

export function NoteIndex() {
    const [notes, setNotes] = useState(null)
    const [noteContentClicked, setNoteContentClicked] = useState(false)
    const [noteCreatorClicked, setNoteCreatorClicked] = useState(false)
    const [currentEditedNoteValues, setCurrentEditedNoteValues] = useState(noteService.getEmptyNote())
    const [currentCreatedNoteValues, setCurrentCreatedNoteValues] = useState(noteService.getEmptyNote())
    const [isCreatedNoteEmpty, setCreatedNoteEmpty] = useState(true)
    const [isNoteJustAdded, setIsNoteJustAdded] = useState(true)
    const [colorPicker, setColorPicker] = useState('')


    const editorRef = useRef(null)
    const creatorRef = useRef(null)

    useEffect(() => {
        loadNotes()
    }, [])

    useEffect(() => {
        document.addEventListener('mousedown', handleClicks)
    }, [])

    useEffect(() => {
        if (!isCreatedNoteEmpty && !noteCreatorClicked) {
            console.log('the values:', currentCreatedNoteValues);
            onCreateNote(currentCreatedNoteValues)
            setIsNoteJustAdded(prev => !prev)
            console.log('asdasdasdasdasdasdasd', isNoteJustAdded)

        }
    }, [isCreatedNoteEmpty, noteCreatorClicked]);

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
        if (elLi) {
            const randomNumber = utilService.getRandomIntInclusive(0, 2)
            const animations = [
                'animate__backOutRight',
                'animate__hinge',
                'animate__bounceOutDown',
            ]
            const animationClass = animations[randomNumber];
            elLi.classList.add('animate__animated', animationClass)
            let timeOut = 1000;
            if (animationClass === 'animate__hinge') {
                timeOut = 2000;
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
            }, timeOut)
        }
    }

    function onChangeColor(noteToModify) {
        console.log('note iam here', noteToModify.id)
    
        noteService.getNote(noteToModify.id)
        .then((note)=>{
            console.log('got note',note)
            const modifyNote = {...note, style : {...note.style, ['backgroundColor'] : colorPicker}}
            onSaveNote(modifyNote)
        })
    }
    

    function onSaveNote(newNote) {
        console.log('Enter onSaveNote!!!!!!!!!!!!!!!!!! ', newNote)
        if (newNote) {
            noteService.saveNote(newNote)
                .then(() => {
                    setNotes((prevNotes) => prevNotes.map((note) => note.id === newNote.id ? { ...note, ...newNote } : note))
                })
        }
    }

    function onCreateNote(newNote) {
        console.log('Enter onCreateNote!!!!!!!!!!!!!!!!!! ', newNote)
        if (newNote) {
            noteService.saveNote(newNote)
                .then(() => {
                    loadNotes()
                })
        }

    }


    function onContentNoteClick(event, selectedNote) {
        console.log('Enter onContentNoteClick', selectedNote)
        event.stopPropagation()
        setNotes((prevNotes => prevNotes.filter((note) => note.id != selectedNote.id)))
        setNoteContentClicked(true)
        setCurrentEditedNoteValues({ ...selectedNote })
    }


    function handleClicks(event) {
        console.log('Enter handleClicks')
        if (editorRef.current && !editorRef.current.contains(event.target)) {
            setNoteContentClicked(false);
            loadNotes(currentEditedNoteValues.id);
        }
        if (creatorRef.current && !creatorRef.current.contains(event.target)) {
            setNoteCreatorClicked(false);
        }
    }

    const handleCreatorChange = ({ target }) => {
        setCurrentCreatedNoteValues(prevCreatedNoteValues =>
            ({ ...prevCreatedNoteValues, info: { ...prevCreatedNoteValues.info, [target.name]: target.value } }))

    }


    const handleEditorChange = ({ target }) => {
        setCurrentEditedNoteValues(prevEditedNoteValues =>
            ({ ...prevEditedNoteValues, info: { ...prevEditedNoteValues.info, [target.name]: target.value } }))

        onSaveNote(currentEditedNoteValues)
    }




    console.log('is created not empty string', isCreatedNoteEmpty)
    console.log('color picker', colorPicker)

    if (!notes) return <React.Fragment>loading...</React.Fragment>
    return <section className="note-index">
        <NoteCreator
            creatorRef={creatorRef}
            handleCreatorChange={handleCreatorChange}
            currentEditedNoteValues={currentEditedNoteValues}
            noteCreatorClicked={noteCreatorClicked}
            setNoteCreatorClicked={setNoteCreatorClicked}
            setCreatedNoteEmpty={setCreatedNoteEmpty}
            isNoteJustAdded={isNoteJustAdded}
        />
        <NoteList notes={notes} onRemoveNote={onRemoveNote} onContentNoteClick={onContentNoteClick}
            animate={!noteContentClicked} setColorPicker={setColorPicker} onChangeColor={onChangeColor} />
        {noteContentClicked &&
            <div>
                <div className="overlay"></div>
                <NoteEditor
                    editorRef={editorRef}
                    noteContentClicked={noteContentClicked}
                    currentEditedNoteValues={currentEditedNoteValues}
                    handleEditorChange={handleEditorChange}
                    onRemoveNote={onRemoveNote}
                    setNoteContentClicked={setNoteContentClicked}
                />
            </div>
        }
    </section>
}

