import { mailService } from "../services/mail.service.js"

export function MailList({mails}) {
    return <ul className="mail-list">
        {
            mails.map(mail => <li key={mail.id}>
                {mail.subject}
            </li>)
        }

    </ul>
}
