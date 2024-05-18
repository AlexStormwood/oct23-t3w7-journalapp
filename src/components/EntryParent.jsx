import { useEffect, useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";
import { useJournalData } from "../contexts/BlogContext";

export default function EntryParent(props){

	let [editMode, setEditMode] = useState(false);

	let [journalEntry, setJournalEntry] = useState({});

	let journalEntries = useJournalData();


	useEffect(() => {
		let foundEntry = journalEntries.find(entry => entry.id === props.id);

		setJournalEntry(foundEntry);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	return(
		<section>
			{editMode ? <EntryForm entryData={journalEntry} /> : <Entry entryData={journalEntry} /> }

			<button onClick={() => setEditMode(!editMode)}>Toggle Edit Mode</button>
		</section>
	)
}