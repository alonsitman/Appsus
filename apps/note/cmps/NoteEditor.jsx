export function NoteEditor({ editorHeaderValue, editorMainValue, handleEditorHeaderChange, handleEditorMainChange }) {
    return (
        <div className="note-editor">
            <form className="note-editor-preview">
                <textarea 
                    className="header" 
                    value={editorHeaderValue} 
                    name="text" 
                    type="text" 
                    placeholder="title" 
                    onChange={handleEditorHeaderChange} 
                    style={{ minHeight: '50px', height: 'auto', overflowY: 'auto' }} 
                />
                <textarea 
                    className="main" 
                    value={editorMainValue} 
                    name="title" 
                    type="text" 
                    placeholder="note" 
                    onChange={handleEditorMainChange} 
                    style={{ minHeight: '50px', height: 'auto', overflowY: 'auto' }} 
                />
            </form>
        </div>
    );
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