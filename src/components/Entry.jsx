export default function Entry(props){
	return (
		<div>
			<h1>{props.entryData.title}</h1>
			<h4>{props.entryData.author}</h4>
			<h6>{props.entryData.date}</h6>

			<p>{props.entryData.content}</p>
		</div>
	)
}