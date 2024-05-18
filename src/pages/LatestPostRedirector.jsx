import { useEffect } from "react";
import { useJournalData } from "../contexts/BlogContext";
import { useNavigate } from "react-router-dom";


export function LatestPostRedirector(){

	let journalEntries = useJournalData();

	let navigate = useNavigate();

	useEffect(() => {
		let sortedEntries = [...journalEntries].sort((entryA, entryB) => entryB.id - entryA.id);

		let latestEntry = sortedEntries[0];

		navigate(`/view/${latestEntry.id}`);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [journalEntries]);

	return (
		<h1>Loading...</h1>
	)
}