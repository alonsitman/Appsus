const { useState, useEffect } = React

import { MailList } from "../cmps/MailList.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"

import { mailService } from "../services/mail.service.js"



export function MailIndex() {
    const [filterBy, setFilterBy] = useState(useState(mailService.getDefaultFilter()))
    const [mails, setMails] = useState([])
    
    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then((mails) => {
                setMails(mails)
                // console.log('filterBy:', filterBy)
            })
    }

    function onFilterChange(newFilterBy) {
        setFilterBy(newFilterBy)
        console.log('filterBy:', filterBy)
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
        <MailFilter 
            mails={mails}
            filterBy={filterBy}
            onFilterChange={onFilterChange}
        />       
        <MailList
            mails={mails}
            // mails={filterMails}
            // filterBy={filterBy}
            onRemoveMail={onRemoveMail}
        />

     
    </section>
}

