import { mailService } from "../services/mail.service.js"

export function MailIndex() {
    return <div>mail app
        {console.log('mails:', mailService.query())}
    </div>
}

