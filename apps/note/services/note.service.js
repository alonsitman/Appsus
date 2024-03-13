import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const NOTE_KEY = 'noteDB'

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
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        note = _createNote()
        return storageService.post(NOTE_KEY, note)
    }
}

function getEmptyNote() {
    return {
        id: 'n101',
        createdAt: 1112222,
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



