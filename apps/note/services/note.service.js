import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'
const colorPicker = ['#FF7F50', '#FFFFE0', '#C2B280', '#ADD8E6', '#abaeb0', '#b2d1c8', '#FFFAF0', '#F9B7FF', '#FFB6C1', '#D3D3D3', '#FFF44F','#FFFFCC', '#00FF7F', '#FA8072']

//For debug ONLY
_createNotes()

export const noteService = {
    query,
    getNote,
    removeNote,
    saveNote,
    getEmptyNote,
    // getDefaultFilter
}

window.cs = noteService

function query() {
    return storageService.query(NOTE_KEY)
        .then(notes => {
            return notes
        })
}

function getNote(noteId) {
    return storageService.query(NOTE_KEY, noteId)
}

function removeNote(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function saveNote(note) {
    if (note.id != '') {
        console.log('saving note')
        return storageService.put(NOTE_KEY, note)
    } else {
        note = _createNote()
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote() {
    return {
        id: '',
        createdAt: 1112222,
        updatedAt: 1112222,
        type: 'NoteTxt',
        isPinned: false,
        style: {
            backgroundColor: '#00d'
        },
        info: {
            title: '',
            txt: ''
        }
    }
}


function _createNote() {
    const note = getEmptyNote()
    note.id = utilService.makeId()
    note.info.title = utilService.makeLorem(utilService.getRandomIntInclusive(1, 4))
    note.info.txt = utilService.makeLorem(utilService.getRandomIntInclusive(5, 15))
    note.backgroundColor = colorPicker[utilService.getRandomIntInclusive(0, colorPicker.length - 1)]
    return note
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = []
        for (var i = 0; i <= 10; i++) {
            notes.push(_createNote())
        }
    }
    utilService.saveToStorage(NOTE_KEY, notes)
}



