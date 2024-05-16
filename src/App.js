import { useEffect, useState } from 'react';
import './App.css';
import { useLocalStorage } from 'react-use';

function App() {

  let [journalEntries, setJournalEntries] = useState([]);
  let [storedEntries, setStoredEntries] = useLocalStorage("journalEntries");

  useEffect(() => {
    setJournalEntries(storedEntries);

    return (() => {
      setStoredEntries(journalEntries);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {journalEntries.length > 0 && <p>{JSON.stringify(journalEntries)}</p>}
    </div>
  );
}

export default App;
