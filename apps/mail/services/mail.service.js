import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const filterBy = {
    status: 'inbox',
    txt: '',
    isRead: false,
    isStarred: false,
    isSnoozed: false,
    // isSent: false,
    // isTrash: false,
    // isDraft: false,
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

function query(filterBy) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (!filterBy) return mails
            return mails.filter(mail => {
                if (mail.status !== filterBy.status) return false
                if (filterBy.status === 'starred' && !mail.isStarred) return false
                // if (filterBy.isRead && mail.isRead !== filterBy.isRead) return false
                if (filterBy.isStarred && mail.isStarred !== filterBy.isStarred) return false
                if (filterBy.isSnoozed && mail.isSnoozed !== filterBy.isSnoozed) return false
                if (filterBy.isSent && mail.isSent !== filterBy.isSent) return false
                if (filterBy.isTrash && mail.isTrash !== filterBy.isTrash) return false
                if (filterBy.isDraft && mail.isDraft !== filterBy.isDraft) return false

                return true
            })
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
        isStared: false,
        isSnoozed: false,
        isSent: false,
        isTrash: false,
        isDraft: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: '',
        to: ''
    }
}

function getDefaultFilter() {
    return filterBy
}

function _createMail(isStarred) {
    const mail = getEmptyMail()
    mail.id = utilService.makeId()
    mail.subject = utilService.makeLorem(utilService.getRandomIntInclusive(1,10))
    mail.body = utilService.makeLorem(utilService.getRandomIntInclusive(15,45))
    mail.from = utilService.getRandomName() + '@momo.com'
    mail.to = 'user@appsus.com'
    mail.isStarred = isStarred
    return mail
}

function _createMails(){
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if(!mails || !mails.length){
        mails = []
        for(var i = 0; i < 15; i++){
            mails.push(_createMail(false))
        }
        for(var i = 0; i < 5; i++){
            mails.push(_createMail(true))
        }

    }
    utilService.saveToStorage(MAIL_KEY, mails)
}
