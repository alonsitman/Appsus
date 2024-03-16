const { useState, useEffect, useRef } = React


export function MailFilter({unreadCount, filterBy, onFilterChange}) {
    // const [activeFilter, setActiveFilter] = useState(filterBy[0].status)  
    const [activeFilter, setActiveFilter] = useState(filterBy)  


    // const prevFilterStatus = useRef(filterBy.status)
    // useEffect(() => {
    //     prevFilterStatus.current = filterBy.status
    // }, [filterBy.status])
    useEffect(() => {
		onFilterChange(activeFilter)
	}, [activeFilter])

    function handleFilterClick(filter) {
        setActiveFilter(filter)
        console.log('filter clicked:', filter)
        console.log('activeFilter:', activeFilter)
        // const updatedFilterBy = { ...filterBy }
        // updatedFilterBy.status = filter
        // console.log('updatedfilter:', updatedFilterBy.status)
        // onFilterChange(updatedFilterBy)
        onFilterChange(activeFilter)
    }
    

    return <section className="mail-filter">
        <ul>
            <li className={activeFilter === 'inbox' ? 'active' : ''}>
                <span className="envelopeIcon"></span>
                <button className="btn-inbox" onClick={() => handleFilterClick('inbox')}>Inbox <span>{unreadCount}</span></button>
            </li>
            <li className={activeFilter === 'starred' ? 'active' : ''}>
                <span className="starIcon"></span>
                <button onClick={() => handleFilterClick('starred')}>Starred</button>
            </li>
            <li className={activeFilter === 'snoozed' ? 'active' : ''}>
                <span className="clockIcon"></span>
                <button onClick={() => handleFilterClick('snoozed')}>Snoozed</button>
            </li>
            <li className={activeFilter === 'important' ? 'active' : ''}>
                <span className="flagIcon"></span>
                <button onClick={() => handleFilterClick('important')}>Important</button>
            </li>
            <li className={activeFilter === 'sent' ? 'active' : ''}>
                <span className="sendIcon"></span>
                <button onClick={() => handleFilterClick('sent')}>Sent</button>
            </li>
            <li className={activeFilter === 'drafts' ? 'active' : ''}>
                <span className="fileIcon"></span>
                <button className="btn-drafts" onClick={() => handleFilterClick('drafts')}>Drafts</button>
            </li>
        </ul>
    </section>
}