import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'

//For debug ONLY
_createMails()

export const mailService = {
    query,
    getMailById,
    removeMail,
    saveMail,
    getEmptyMail,
    // getDefaultFilter
}

window.cs = mailService

function query() {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            return mails
        })
}

function getMailById(mailId) {
    return storageService.query(MAIL_KEY, mailId)
}

function removeMail(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function saveMail(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        mail = _createMail()
        return storageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail() {
    return {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt : 1551133930594,
        removedAt : null,
        from: 'momo@momo.com',
        to: 'user@appsus.com'
    }
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
        for(var i = 0; i <= 10; i++){
            mails.push(_createMail())
        }
    }
    utilService.saveToStorage(MAIL_KEY, mails)
    console.log('mails:', mails)
}
