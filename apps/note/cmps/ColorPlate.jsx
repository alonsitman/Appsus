import { noteService } from "../services/note.service.js"

export function ColorPlate({ note, onChangeColor }) {

    return (
        <section className="color-plate">
            {noteService.getColorPicker().map(color => (
                <button className="btn" key={`color-${color}`} id={`color-${color}`} style={{ backgroundColor: color }}
                    onClick={() => {
                        onChangeColor(note, color)
                    }}>
                </button>
            ))}
        </section>
    )
}