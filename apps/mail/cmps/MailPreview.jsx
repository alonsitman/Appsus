

export function MailPreview({mail, onClick}) {
    const senderName = mail.from.split('@')[0]
    
    return <article className={`mail-preview ${mail.isRead ? 'read' : 'unread'}`} onClick={onClick}>

        <h4 className="sender">{senderName}</h4>
        <h4 className="subject">{mail.subject}</h4>
    </article>
}


