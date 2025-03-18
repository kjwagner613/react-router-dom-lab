import { Link } from 'react-router-dom';
import '../../../src/index.css';

function MailboxList({ mailboxes }) {
  return (
    <div>
    <h1>Mailboxes</h1>
      {mailboxes.map((mailbox) => (
        <div key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>Mailbox #{mailbox._id}</Link>
          <p>Boxholder: {mailbox.boxholder}</p> {/* Displaying boxholder here */}
          <p>Size: {mailbox.boxSize}</p> {/* Displaying box size */}
        </div>
      ))}
    </div>
  );
}

export default MailboxList;