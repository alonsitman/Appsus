const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"


export function MailIndex() {
    const [mails, setMails] = useState(null)
    
    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query()
            .then((mails) => {
                setMails(mails)
            })
    }

    function onRemoveMail(mailId) {
        console.log('mailId:', mailId)
        mailService.remove(mailId)
            .then(() => {
                console.log('removed')
                setMails((prevMails) => prevMails.filter(mail => mail.id !== mailId))
            })
            .catch((err) => {
                console.log('had issues removing mail', err)
            })
    }

    

    if (!mails) return <div>Loading...</div>
    return <section className="mail-index">
        <MailCompose />        
        <MailList
            mails={mails}
            onRemoveMail={onRemoveMail}
        />

     
    </section>
}

