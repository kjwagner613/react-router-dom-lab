import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LetterForm({ mailboxes, addLetter }) {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [mailboxId, setMailboxId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`); // Redirect to the mailbox details
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
        <h1>New Letter</h1>
      <label>
        Mailbox Number:
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
          <option value="">Select a mailbox</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox #{mailbox._id}
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient Name:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Send Letter</button>
    </form></div>
  );
}

export default LetterForm;