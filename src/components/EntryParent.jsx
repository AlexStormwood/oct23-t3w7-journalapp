import { useState } from "react";
import Entry from "./Entry";
import EntryForm from "./EntryForm";

export default function EntryParent(props){

	let [editMode, setEditMode] = useState(false);

	return(
		<section>
			{editMode ? <EntryForm entryData={props.entryData} /> : <Entry entryData={props.entryData} /> }

			<button onClick={() => setEditMode(!editMode)}>Toggle Edit Mode</button>
		</section>
	)
}