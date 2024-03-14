

export function MailPreview({mail, onClick}) {
    return <article className={`mail-preview ${mail.isRead ? 'read' : 'unread'}`} onClick={onClick}>

        <h1>{mail.from}</h1>
        <h4>{mail.subject}</h4>
    </article>
}


