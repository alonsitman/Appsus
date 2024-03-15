import { NoteCreatorToolBar } from "./NoteCreatorToolBar.jsx"

export function NoteCreator(handleEditorChange) {
    return <section className="note-creator">
        <form className="note-creator-preview">
            <textarea
                className="header"
                name="title"
                type="text"
                placeholder="Title"
                onChange={handleEditorChange}
            />
            <textarea
                className="Note"
                name="txt"
                type="text"
                placeholder="Take a note..."
                onChange={handleEditorChange}
            />
            <section className="footer">
            <NoteCreatorToolBar/>
            </section>
            <button className="btn pin-note-btn fa-solid fa-thumbtack"></button>
        </form>
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