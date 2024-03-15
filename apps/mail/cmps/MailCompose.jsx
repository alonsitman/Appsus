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
    
  
    return (
        <div className="mail-compose">
            <div className="compose">
                <span className="penIcon"></span>
                <button className="btn-compose" onClick={() => setShowCompose(true)}>Compose</button>
            </div>
            {showCompose && (
            <form className="mail-compose-editor" onSubmit={handleSubmit}>
                <div className="editor-header">
                    <span>New Message</span>
                    <button onClick={() => setShowCompose(false)}>X</button>
                </div>
                <div>
                    <label htmlFor="recipient"></label>
                    <input
                        type="email"
                        id="recipient"
                        placeholder="Recipients"
                        value={recipient}
                        onChange={handleRecipientChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject"></label>
                    <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={handleSubjectChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="body"></label>
                    <textarea
                    id="body"
                    value={body}
                    onChange={handleBodyChange}
                    required
                    />
                </div>
                <button className="btn-send" type="submit">Send</button>
            </form>
            )}
        </div>
      )
}

