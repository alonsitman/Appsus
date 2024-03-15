export function MailFilter({mails, activeFilter, onFilterChange}) {
    
    const unreadMails = mails.filter(mail => !mail.isRead)
    const unreadCount = unreadMails.length
    
    return <section className="mail-filter">
        <ul>
            <li className={activeFilter === 'inbox' ? 'active' : ''}>
                <span className="envelopeIcon"></span>
                <button onClick={() => onFilterChange('inbox')}>Inbox <span>{unreadCount}</span></button>
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
                <button onClick={() => onFilterChange('drafts')}>Drafts</button>
            </li>
        </ul>
    </section>
}