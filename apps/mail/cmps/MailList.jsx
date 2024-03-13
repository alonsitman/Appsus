import { mailService } from "../services/mail.service.js"
import { MailPreview } from "./MailPreview.jsx"

export function MailList({mails, onRemoveMail}) {
    return <ul className="mail-list">
        {
            mails.map(mail => <li key={mail.id}>
                <MailPreview mail={mail} />
                <div className="mail-actions">
                    <button className="remove-btn" onClick={() => onRemoveMail(mail.id)}>X</button>
                </div>
            </li>)
        }

    </ul>
}
