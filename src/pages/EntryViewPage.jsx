import { useNavigate, useParams } from "react-router-dom";
import EntryParent from "../components/EntryParent";

export function EntryViewPage(){
	// localhost:3000/view/1
	// id = 1;
	let {id} = useParams();

	let navigate = useNavigate();

	return(
		<div>

			<EntryParent id={id} />

			<button onClick={() => navigate(-1)}>
				Go back
			</button>
		</div>
	)
}