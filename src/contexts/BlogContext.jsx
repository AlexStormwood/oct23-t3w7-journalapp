import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";


let defaultJournalData = [
	{
		id: 0,
		title:"Default journal post",
		content: "Welcome to the website!",
		author: "Alex",
		date: Date.now()
	}
];

// This is only the data 
export const JournalDataContext = createContext(null);
// This is the function to update the data 
export const JournalDispatchContext = createContext(null);

// Hook to read the global data 
export function useJournalData(){
	// console.log("Journal data is being accessed");
	return useContext(JournalDataContext);
}

// Hook to call the function that edits the global data 
export function useJournalDispatch(){
	return useContext(JournalDispatchContext);
}


export function BlogProvider({children}) {

	let [journalEntries, setJournalEntries] = useState([]);
  	let [storedEntries, setStoredEntries] = useLocalStorage("journalEntries", []);

	let [exampleState, setExampleState] = useState("Hello from global level!");

	useEffect(() => {
		setJournalEntries(storedEntries);
	
		// return (() => {
		//   setStoredEntries(journalEntries);
		// });
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


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

	return (
		<JournalDataContext.Provider value={journalEntries} >
			<JournalDispatchContext.Provider value={addEntryToJournal}>
				{children}
			</JournalDispatchContext.Provider>
		</JournalDataContext.Provider>
	)
}