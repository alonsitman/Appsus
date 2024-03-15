const { useState } = React

// import { mailService } from "../services/mail.service.js"
import { MailPreview } from "./MailPreview.jsx"
import { MailDetails } from "./MailDetails.jsx"


export function MailList({mails, onRemoveMail}) {
    
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
        <div className="criteria">
            <div><span className=""></span>  Primary</div>
            <div><span className=""></span>  Promotions</div>
            <div><span className="socialIcon"></span>  Social</div>
        </div>
        <ul>
            {
                mails.map(mail => <li key={mail.id} >
                    <MailPreview mail={mail} onClick={ () => handleMailClick(mail.id)}/>
                </li>)
            }

        </ul>
        </div>)}
        
        {selectedMail && (
            <button onClick={handleCloseMailDetails}>Close</button>
        )}
    </div>
}
