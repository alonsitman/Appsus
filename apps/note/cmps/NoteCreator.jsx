const {useState, useEffect} = React
import { NoteCreatorToolBar } from "./NoteCreatorToolBar.jsx"

export function NoteCreator({ handleCreatorChange, creatorRef, noteCreatorClicked, setNoteCreatorClicked, setCreatedNoteEmpty }) {
    const [titleValue, setTitleValue] = useState('')
    const [txtValue, setTxtValue] = useState('')
    
    useEffect(() => {
        const isTitleEmpty = titleValue.trim() === '';
        const isTxtEmpty = txtValue.trim() === '';
        setCreatedNoteEmpty(isTitleEmpty && isTxtEmpty);
    }, [titleValue, txtValue, setCreatedNoteEmpty]);



    return <section ref={creatorRef}  className={noteCreatorClicked ? "note-creator" : ""}>
        <form className="note-creator-preview">
            {noteCreatorClicked && (<textarea
                className="header"
                name="title"
                type="text"
                placeholder="Title"
                onChange={(event) => {
                    handleCreatorChange(event)
                    setTitleValue(event.target.value)
                }}
            />)}
            <textarea
                className={`main${noteCreatorClicked ? '' : ' main-active'}`}
                name="txt"
                type="text"
                value={noteCreatorClicked ? txtValue : ''}
                placeholder="Take a note..."
                onChange={(event) => {
                    handleCreatorChange(event)
                    setTxtValue(event.target.value)
                }}
                onClick={() => setNoteCreatorClicked(true)}
            />
        </form>
        {noteCreatorClicked && (
            <React.Fragment>
                <section className="footer">
                    <NoteCreatorToolBar />
                </section>
                <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>
            </React.Fragment>
        )}
    </section>
}




{/* <section ref={editorRef} className="note-editor" style={formStyle}>
<form className="note-editor-preview">
    <textarea
        className="header"
        value={currentEditedNoteValues.info.title}
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleEditorChange}
    />
    <textarea
        className="main"
        value={currentEditedNoteValues.info.txt}
        name="txt"
        type="text"
        placeholder="Note"
        onChange={handleEditorChange}
    />
</form>
<section className="footer">
    <NoteEditorToolBar currentEditedNoteValues={currentEditedNoteValues} onRemoveNote={onRemoveNote} setNoteContentClicked ={setNoteContentClicked} />
</section>
<button className="btn pin-note-btn fa-solid fa-thumbtack"></button>

</section> */}