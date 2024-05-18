import { NavLink, Outlet } from "react-router-dom";


export function Template(){

	return (
		<div>
			<nav>
				<h1>Alex's Cool Journal </h1>

				<NavLink to="/">
					Home 
				</NavLink>
				<NavLink to="/create">
					Write a post
				</NavLink>
			</nav>

			<main>
				<Outlet />
			</main>

			<footer>
				Journal Footer with Copyright Info Blah Blah Blah 
			</footer>
		</div>
	)
}