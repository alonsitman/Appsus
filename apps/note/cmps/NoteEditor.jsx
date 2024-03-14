export function NoteEditor({ editorHeaderValue, editorMainValue, handleEditorHeaderChange, handleEditorMainChange, 
                             editorRef, noteContentClicked, editorValues,  currentEditedNoteValues, handleEditorChange}) {

                                
    if(noteContentClicked === false){
        console.log('Not is clicked === false')
       
    }

    return (
        <section ref={editorRef} className="note-editor">
            <form  className="note-editor-preview">
                <textarea 
                    className="header" 
                    value={currentEditedNoteValues.info.title} 
                    name="title" 
                    type="text" 
                    placeholder="Title" 
                    onChange={handleEditorChange} 
                    style={{ minHeight: '50px', height: 'auto', overflowY: 'auto' }} 
                />
                <textarea 
                    className="main" 
                    value={currentEditedNoteValues.info.txt} 
                    name="txt" 
                    type="text" 
                    placeholder="Note" 
                    onChange={handleEditorChange} 
                    style={{ minHeight: '50px', height: 'auto', overflowY: 'auto' }} 
                />
            </form>
        </section>
    )
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