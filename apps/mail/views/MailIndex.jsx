const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"

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

    console.log('mails from mail index:', mails)
    if (!mails) return <div>Loading...</div>
    return <section className="mail-index">
        <h1>mail app</h1>
        <MailList
            mails={mails}
            onRemoveMail={onRemoveMail}
        />
      
     
    </section>
}

