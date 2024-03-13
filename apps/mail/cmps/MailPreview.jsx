

export function MailPreview({mail}) {
    return <article className="mail-preview">
        <h1>{mail.from}</h1>
        <h4>{mail.subject}</h4>
    </article>
}