import EntryParent from "../components/EntryParent";
import { useJournalData } from "../contexts/BlogContext";


export function HomePage(){

	let journalEntries = useJournalData();

	return (
		<div>
			{journalEntries?.map((entry, index) => {
				return <EntryParent key={index} id={entry.id}  />
			})}
		</div>
	)
}