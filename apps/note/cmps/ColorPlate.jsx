import { noteService } from "../services/note.service.js"

export function ColorPlate() {
    return <section className="color-plate">
        {
            noteService.getColorPicker().map(color => <button className="btn" id={`'color-${color}`} style={{ backgroundColor: color }}></button>)
        }
    </section>
}