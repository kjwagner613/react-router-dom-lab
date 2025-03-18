import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import { useState } from 'react';
import LetterForm from './components/Letterform/LetterForm.jsx';
import './index.css';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newBox) => {
    console.log('New Mailbox:', newBox);
    setMailboxes((prevBoxes) => [
      ...prevBoxes,
      { _id: prevBoxes.length + 1, ...newBox } 
    ]);
  };

  const addLetter = (newLetter) => {
    setLetters((prevLetters) => [...prevLetters, newLetter]);
  };

  return (
    <div id="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
      </Routes>
    </div>
  );
};

export default App;