import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const filterBy = {
    status: 'inbox',
    txt: 'puki', // no need to support complex text search
    isRead: false,
    isStared: false,
    isSnoozed: false,
    isSent: false,
    isTrash: false,
    isDraft: false,
    lables: ['important', 'romantic'] // has any of the labels
}

//For debug ONLY
_createMails()
////////////////

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter
}

window.cs = mailService

function query() {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            return mails
        })
}

function get(mailId) {
    return storageService.query(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        mail = _createMail()
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: utilService.getRandomName() + '@momo.com',
        to: 'user@appsus.com'
    }
}

function getDefaultFilter() {
    return filterBy
}

function _createMail() {
    const mail = getEmptyMail()
    mail.id = utilService.makeId()
    mail.subject = utilService.makeLorem(utilService.getRandomIntInclusive(1,4))
    mail.body = utilService.makeLorem(utilService.getRandomIntInclusive(5,15))
    return mail
}

function _createMails(){
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if(!mails || !mails.length){
        mails = []
        for(var i = 0; i < 30; i++){
            mails.push(_createMail())
        }
    }
    utilService.saveToStorage(MAIL_KEY, mails)
}
