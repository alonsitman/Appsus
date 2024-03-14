

export function MailPreview({mail, onClick}) {
    const fromName = mail.from.split('@')[0]
    
    return <article className={`mail-preview ${mail.isRead ? 'read' : 'unread'}`} onClick={onClick}>

        <h4>{fromName}</h4>
        <h4>{mail.subject}</h4>
    </article>
}


