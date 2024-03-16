const { useState, useEffect } = React
// const { Link, useSearchParams } = ReactRouterDOM

import { MailList } from "../cmps/MailList.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailCompose } from "../cmps/MailCompose.jsx"

import { mailService } from "../services/mail.service.js"



export function MailIndex() {
    const [filterBy, setFilterBy] = useState(useState(mailService.getDefaultFilter()))
    const [mails, setMails] = useState([])
    const unreadMails = mails.filter(mail => !mail.isRead)
    const unreadCount = unreadMails.length
    
    useEffect(() => {
        // setSearchParams(filterBy)
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then((mails) => {
                setMails(mails)
                // console.log('filterBy:', filterBy)
                // console.log('and the mails:', mails)
            })
    }

    function onFilterChange(newFilterBy) {
        setFilterBy(newFilterBy)
        // setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
        console.log('newFilterBy:', newFilterBy)
        console.log('onfilterchange filterBy:', filterBy)
    }

    function onRemoveMail(mailId) {
        console.log('mailId:', mailId)
        mailService.remove(mailId)
            .then(() => {
                console.log('removed')
                setMails((prevMails) => prevMails.filter(mail => mail.id !== mailId))
            })
            .catch((err) => {
                console.log('had problems removing mail', err)
            })
    }


    if (!mails) return <div>Loading...</div>
    return <section className="mail-index">
        <MailCompose />
        
        <MailFilter 
            filterBy={filterBy}
            unreadCount={unreadCount}
            onFilterChange={onFilterChange}
        />       
        <MailList
            mails={mails}
            onRemoveMail={onRemoveMail}
        />
    </section>
}

