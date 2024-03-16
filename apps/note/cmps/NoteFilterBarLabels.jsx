import { useState } from 'react';
export function NoteFilterBarLabels({isHovered}) {
    return <section class="labels">
        <section className=" bar-section label">
            <button class=" btn label-btn labelIcon"></button>
            {isHovered && <p>Label</p>}
        </section>
    </section>
}