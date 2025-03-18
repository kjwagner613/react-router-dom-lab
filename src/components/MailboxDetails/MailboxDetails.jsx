import { useParams } from 'react-router-dom';
import '../../../src/index.css';

function MailboxDetails({ mailboxes, letters }) {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  if (!selectedBox) return <h2>Mailbox Not Found!</h2>;

  const mailboxLetters = letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  return (
    <div>
      <h2>Mailbox #{selectedBox._id}</h2>
      <p>Boxholder: {selectedBox.boxholder}</p> {/* Use boxholder instead of boxOwner */}
      <p>Size: {selectedBox.boxSize}</p>
      <h3>Letters</h3>
      <div className="letters">
      {mailboxLetters.length > 0 ? (
        <ul>
          {mailboxLetters.map((letter, index) => (
            <li key={index}>
              <strong>To:</strong> {letter.recipient} <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No letters yet.</p>
      )}
    </div></div>
  );
}

export default MailboxDetails;