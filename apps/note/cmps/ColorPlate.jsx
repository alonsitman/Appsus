import { noteService } from "../services/note.service.js"

export function ColorPlate({ setColorPicker, note, onChangeColor }) {

    return (
        <section className="color-plate">
            {noteService.getColorPicker().map(color => (
                <button className="btn" key={`color-${color}`} id={`color-${color}`} style={{ backgroundColor: color }}
                    onClick={() => {
                        setColorPicker(color)
                        onChangeColor(note, color)
                    }}>
                </button>
            ))}
        </section>
    )
}