const { useState } = React

export function MailCompose() {
    const [showCompose, setShowCompose] = useState(false)
    const [recipient, setRecipient] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    
    const handleRecipientChange = (event) => {
        setRecipient(event.target.value)
    }
    
    const handleSubjectChange = (event) => {
        setSubject(event.target.value)
    }
    
    const handleBodyChange = (event) => {
        setBody(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // Temp submission logic until sending the email logic developed
        console.log("Recipient:", recipient)
        console.log("Subject:", subject)
        console.log("Body:", body)

        // Reset form fields after submission
        setRecipient('')
        setSubject('')
        setBody('')

        setShowCompose(false)
    }
    
    const toggleCompose = () => {
        setShowCompose(!showCompose)
    }
    
    return (
        <div className="mail-compose">
            
            <button onClick={toggleCompose}>Compose</button>
           
            {showCompose && (
            <form className="mail-compose-editor" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="recipient">To:</label>
                    <input
                        type="email"
                        id="recipient"
                        value={recipient}
                        onChange={handleRecipientChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                    id="body"
                    value={body}
                    onChange={handleBodyChange}
                    required
                    />
                </div>
                <button type="submit">Send</button>
                <button onClick={toggleCompose}>X</button>
            </form>
            )}
        </div>
      )
}

