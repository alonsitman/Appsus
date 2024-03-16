import { NoteFilterBarLabels } from "./NoteFilterBarLabels.jsx"
export function NoteFilterBarPreview() {
    return <section>
        <section class="notes-main">
            <button class=" btn notes-filter-btn"></button>
            <p>Notes</p>
        </section>
              <NoteFilterBarLabels/>
        <section class="edit-labels">
            <button class=" btn edit-labels-btn"></button>
            <p>Edit labels</p>
        </section>
        <section class="archive">
            <button class=" btn archive-btn"></button>
            <p>Archive</p>
        </section>
        <section class="trash">
            <button class=" btn trash"></button>
            <p>Trash</p>
        </section>
    </section>
}