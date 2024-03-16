const { useState } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({mails}) {
    const [activeFilter, setActiveFilter] = useState(mailService.getDefaultFilter().status)
    const unreadMails = mails.filter(mail => !mail.isRead)
    const unreadCount = unreadMails.length

    function onFilterChange(activeFilter) {
        setActiveFilter(activeFilter)
    }


    return <section className="mail-filter">
        <ul>
            <li className={activeFilter === 'inbox' ? 'active' : ''}>
                <span className="envelopeIcon"></span>
                <button className="btn-inbox" onClick={() => onFilterChange('inbox')}>Inbox <span>{unreadCount}</span></button>
            </li>
            <li className={activeFilter === 'starred' ? 'active' : ''}>
                <span className="starIcon"></span>
                <button onClick={() => onFilterChange('starred')}>Starred</button>
            </li>
            <li className={activeFilter === 'snoozed' ? 'active' : ''}>
                <span className="clockIcon"></span>
                <button onClick={() => onFilterChange('snoozed')}>Snoozed</button>
            </li>
            <li className={activeFilter === 'important' ? 'active' : ''}>
                <span className="flagIcon"></span>
                <button onClick={() => onFilterChange('important')}>Important</button>
            </li>
            <li className={activeFilter === 'sent' ? 'active' : ''}>
                <span className="sendIcon"></span>
                <button onClick={() => onFilterChange('sent')}>Sent</button>
            </li>
            <li className={activeFilter === 'drafts' ? 'active' : ''}>
                <span className="fileIcon"></span>
                <button className="btn-drafts" onClick={() => onFilterChange('drafts')}>Drafts</button>
            </li>
        </ul>
    </section>
}