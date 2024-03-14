export function MailFilter({activeFilter, onFilterChange}) {
    return <section className="mail-filter">
        <ul>
            <li className={activeFilter === 'inbox' ? 'active' : ''}>
                <button onClick={() => onFilterChange('inbox')}>Inbox</button>
            </li>
            <li className={activeFilter === 'starred' ? 'active' : ''}>
                <button onClick={() => onFilterChange('starred')}>Starred</button>
            </li>
            <li className={activeFilter === 'snoozed' ? 'active' : ''}>
                <button onClick={() => onFilterChange('snoozed')}>Snoozed</button>
            </li>
            <li className={activeFilter === 'important' ? 'active' : ''}>
                <button onClick={() => onFilterChange('important')}>Important</button>
            </li>
            <li className={activeFilter === 'sent' ? 'active' : ''}>
                <button onClick={() => onFilterChange('sent')}>Sent</button>
            </li>
            <li className={activeFilter === 'drafts' ? 'active' : ''}>
                <button onClick={() => onFilterChange('drafts')}>Drafts</button>
            </li>
        </ul>
    </section>
}