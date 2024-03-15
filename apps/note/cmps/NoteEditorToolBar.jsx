
export function NoteEditorToolBar({ currentEditedNoteValues, onRemoveNote, setNoteContentClicked }) {
    
    function handleRemoveClick(){
        onRemoveNote(currentEditedNoteValues.id)
        setNoteContentClicked(false)
    }

    return <section className="note-editor-toolBar">
        <button className="btn delete-btn trashIcon" onClick={() =>handleRemoveClick()}></button>
        <button className="btn archive-btn archiveIcon"></button>
        <button className="btn add-image-btn imageIcon"></button>
        <button className="btn background-color-btn fa-solid fa-palette"></button>
        <button className="btn duplicate-btn duplicateIcon"></button>
    </section>
}