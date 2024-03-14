const { useState } = React

// import { mailService } from "../services/mail.service.js"
import { MailPreview } from "./MailPreview.jsx"
import { MailDetails } from "./MailDetails.jsx"


export function MailList({mails, onRemoveMail}) {
    const unreadMails = mails.filter(mail => !mail.isRead)
    const unreadCount = unreadMails.length
    
    const [selectedMail, setSelectedMail] = useState(null)
    const handleMailClick = (mailId) => {
        const clickedMail = mails.find(mail => mail.id === mailId)
        clickedMail.isRead = true
        setSelectedMail(clickedMail)

    }

    const handleCloseMailDetails = () => {
        setSelectedMail(null)
    }

    return <div className="mail-list">
        {selectedMail ? 
            <MailDetails mail={selectedMail} /> : (<div>
        <pre>Unread: {unreadCount}</pre>
        <ul>
            {
                mails.map(mail => <li key={mail.id} >
                    <MailPreview mail={mail} onClick={ () => handleMailClick(mail.id)}/>
                    <div className="mail-actions">
                        <button className="remove-btn btn trashIcon" onClick={() => onRemoveMail(mail.id)}></button>
                    </div>
                </li>)
            }

        </ul>
        </div>)}
        
        {selectedMail && (
            <button onClick={handleCloseMailDetails}>Close</button>
        )}
    </div>
}
