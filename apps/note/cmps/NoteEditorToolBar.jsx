const { useState } = React
import { ColorPlate } from "./ColorPlate.jsx"

export function NoteEditorToolBar({ currentEditedNoteValues, onRemoveNote, setNoteContentClicked, onChangeColor }) {
    const [isColorPlateOpen, setIsColorPlateOpen] = useState(false)
    const handleColorPlateClick = () => {
        setIsColorPlateOpen(prev => !prev)
    }

    function handleRemoveClick() {
        onRemoveNote(currentEditedNoteValues.id)
        setNoteContentClicked(false)
    }

    return <section className="note-editor-toolBar">
        <button className="btn delete-btn trashIcon" onClick={() => handleRemoveClick()}></button>
        <button className="btn archive-btn archiveIcon"></button>
        <button className="btn add-image-btn imageIcon"></button>
        <div className="btn background-color-btn fa-solid fa-palette" onClick={handleColorPlateClick}>
            {isColorPlateOpen && <ColorPlate note={currentEditedNoteValues} onChangeColor={onChangeColor}  />}
        </div>
        <button className="btn duplicate-btn duplicateIcon"></button>
    </section>
}

