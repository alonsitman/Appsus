import { ColorPlate } from "./ColorPlate.jsx"


export function NotePreviewToolBar({note, onRemoveNote}) {
    
    return <section className="note-preview-tool-bar">
        <button className="btn delete-btn trashIcon" onClick={() => onRemoveNote(note.id)}></button>
        <button className="btn archive-btn archiveIcon"></button>
        <button className="btn add-image-btn imageIcon"></button>
        <button className="btn background-color-btn fa-solid fa-palette">
           <ColorPlate/>
        </button>
        <button className="btn duplicate-btn duplicateIcon"></button>
    </section>
}
