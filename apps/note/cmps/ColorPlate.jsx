import { noteService } from "../services/note.service.js"

export function ColorPlate(){
    return <section className="color-plate">
        {
            noteService.getColorPicker().map(color => <button id={`'color-${color}`}></button>)
        }
    </section>
}