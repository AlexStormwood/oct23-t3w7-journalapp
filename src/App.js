import { useEffect, useState } from 'react';
import './App.css';
import { useLocalStorage } from 'react-use';
import EntryParent from './components/EntryParent';
import EntryForm from './components/EntryForm';
import { useJournalData } from './contexts/BlogContext';

function App() {

  // let someExampleGlobalState = useJournalData();

  let journalEntries = useJournalData();

  return (
    <div className="App">

      {/* {someExampleGlobalState} */}

      {/* {journalEntries?.length > 0 && <p>{JSON.stringify(journalEntries)}</p>} */}

      <EntryForm entryData={{}} /> 

      {journalEntries?.map((entry, index) => {
        return <EntryParent key={index} entryData={entry}  />
      })}
    </div>
  );
}

export default App;
