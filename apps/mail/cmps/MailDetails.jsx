const { useState } = React


export function MailDetails({mail}) {
    return (
        <section className="mail-details">
            <h1>{mail.subject}</h1>
            <p>From: {mail.from}</p>
            <p>To: {mail.to}</p>
            <p>{mail.body}</p>
        </section>
    )
}