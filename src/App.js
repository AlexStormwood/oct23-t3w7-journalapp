import { useEffect, useState } from 'react';
import './App.css';
import { useLocalStorage } from 'react-use';
import EntryParent from './components/EntryParent';
import EntryForm from './components/EntryForm';

function App() {

  let [journalEntries, setJournalEntries] = useState([]);
  let [storedEntries, setStoredEntries] = useLocalStorage("journalEntries", []);

  const addEntryToJournal = (title, author, content, date = Date.now(), id = null) => {
    // let currentJournalEntries = [...journalEntries];
    // currentJournalEntries.push({title, author, content, date});
    // setJournalEntries(currentJournalEntries);

    // crypto.uuid as the key
    // use the date/datetime/milliseconds as the key
    // combine all data into a string title+content+date 
    // simple number as ID eg. 0, 1, 2, 

    if (id){
      // UPDATE EXISTING ENTRY 
      // find the object with the matching ID 
      let existingEntry = journalEntries.find((entry) => entry.id === id);
      // remove the found object from the array
      let currentJournalEntries = journalEntries.filter((entry) => entry.id !== id);
      // update the found object 
      existingEntry = {
        title, author, content, date, id
      }
      // add the found object back into the array
      let updatedJournalEntries = [...currentJournalEntries, existingEntry];
      // write array to state & localstorage 
      setJournalEntries(updatedJournalEntries);
      setStoredEntries(updatedJournalEntries);
    } else {
      // CREATE A NEW ENTRY 
      setJournalEntries([...journalEntries, { id: journalEntries.length, title, author, content, date }]);
      setStoredEntries([...journalEntries, { id: journalEntries.length,title, author, content, date }]);
    }
    

    
  }

  useEffect(() => {
    setJournalEntries(storedEntries);

    // return (() => {
    //   setStoredEntries(journalEntries);
    // });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {journalEntries?.length > 0 && <p>{JSON.stringify(journalEntries)}</p>}

      <EntryForm entryData={{}} addEntry={addEntryToJournal} /> 

      {journalEntries?.map((entry, index) => {
        return <EntryParent key={index} entryData={entry} addEntry={addEntryToJournal} />
      })}
    </div>
  );
}

export default App;
