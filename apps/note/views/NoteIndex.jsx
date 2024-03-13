const { useState, useEffect } = React
import { noteService } from "../services/note.service.js"
import { NoteList } from "../cmps/NoteList.jsx"

export function NoteIndex() {
    const [notes, setNotes] = useState(null)

    useEffect(()=>{
        loadNotes()
    },[])

    function loadNotes() {
        noteService.query()
        .then((notes) =>{
            setNotes(notes)
            console.log('need to replace it for succsess messege etc..')
        })
        .catch((err) =>{
            console.log('Error occur by loading notes', err)
        })
    }

    
    if(!notes) return <React.Fragment>loading...</React.Fragment>
    return <section className="note-index">
            <h1>notes</h1>
            <NoteList notes={notes}/>
        </section>
}
