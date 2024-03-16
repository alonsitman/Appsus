const { useState } = React;
import { NoteFilterBarLabels } from "./NoteFilterBarLabels.jsx";

export function NoteFilterBarPreview() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <section 
            className="note-filter-bar-preview"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <section className="bar-section notes-main">
                <button className="btn notes-filter-btn noteIcon"></button>
                {isHovered && <p>Notes</p>}
            </section>
            <section className="bar-section reminder">
                <button className="btn reminder-btn reminderIcon"></button>
                {isHovered && <p>Reminder</p>}
            </section>
            <NoteFilterBarLabels isHovered={isHovered} />
            <section className="bar-section edit-labels">
                <button className="btn edit-labels-btn editLabelsIcon"></button>
                {isHovered && <p>Edit labels</p>}
            </section>
            <section className="bar-section archive">
                <button className="btn archive-btn archiveIcon"></button>
                {isHovered && <p>Archive</p>}
            </section>
            <section className="bar-section trash">
                <button className="btn trashIcon"></button>
                {isHovered && <p>Trash</p>}
            </section>
        </section>
    );
}