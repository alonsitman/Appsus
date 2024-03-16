import { NoteEditorToolBar } from "./NoteEditorToolBar.jsx"

export function NoteEditor({ editorRef, noteContentClicked, currentEditedNoteValues, handleEditorChange, onRemoveNote, setNoteContentClicked, onChangeColor }) {


    const formStyle = {
        backgroundColor: currentEditedNoteValues.style.backgroundColor
    }

    return (
        <section ref={editorRef} className="note-editor" style={formStyle}>
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
                <NoteEditorToolBar currentEditedNoteValues={currentEditedNoteValues} onRemoveNote={onRemoveNote} 
                                   setNoteContentClicked ={setNoteContentClicked} onChangeColor={onChangeColor} />
            </section>
            <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>

        </section>
    )
}
