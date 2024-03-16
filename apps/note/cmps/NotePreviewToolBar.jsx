const  { useState } = React
import { ColorPlate } from "./ColorPlate.jsx"


export function NotePreviewToolBar({ note, onRemoveNote, setColorPicker, onChangeColor, onDuplicateNote}) {
    console.log(onDuplicateNote)
    const [isColorPlateOpen, setIsColorPlateOpen] = useState(false)
    const handleColorPlateClick = () => {
        setIsColorPlateOpen(prev => !prev)
    }

    return (
        <section className="note-preview-tool-bar">
            <button className="btn delete-btn trashIcon" onClick={() => onRemoveNote(note.id)}></button>
            <div className="btn background-color-btn fa-solid fa-palette" onClick={handleColorPlateClick}>
                {isColorPlateOpen && <ColorPlate setColorPicker={setColorPicker} note={note} onChangeColor={onChangeColor}/>}
            </div>
            <button className="btn archive-btn archiveIcon"></button>
            <button className="btn add-image-btn imageIcon"></button>
            <button className="btn duplicate-btn duplicateIcon" onClick={() => onDuplicateNote(note)}></button>
        </section>
    );
}