/*
			<h1>{props.entryData.title}</h1>
			<h4>{props.entryData.author}</h4>
			<h6>{props.entryData.date}</h6>

			<p>{props.entryData.content}</p>
*/

import { useState } from "react"

export default function EntryForm(props){

	let [localTitle, setLocalTitle] = useState(props.entryData.title);
	let [localAuthor, setLocalAuthor] = useState(props.entryData.author);
	let [localContent, setLocalContent] = useState(props.entryData.content);
	// may do date later!

	return(
		<div>
			<label htmlFor="entryTitle">Title:</label>
			<input type="text" name="entryTitle" class="entryTitle" value={localTitle} onChange={(event) => setLocalTitle(event.target.value) }      />

			<label htmlFor="entryAuthor">Author:</label>
			<input type="text" name="entryAuthor" class="entryAuthor" value={localAuthor} onChange={(event) => setLocalAuthor(event.target.value) }      />

			<label htmlFor="entryContent">Content:</label>
			<input type="text" name="entryContent" class="entryContent" value={localContent} onChange={(event) => setLocalContent(event.target.value) }      />
		</div>
	)
}