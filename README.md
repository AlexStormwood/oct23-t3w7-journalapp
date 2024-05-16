# Journal App

- Local storage hook 
- React Router params and redirection (it has a hook too!) 

- Journal application 
	- reusable components: 
		- Entry 		-- just show the journal entry data, read-only 
		- EntryForm 	-- form to edit/create journal entry data 
		- EntryParent 	-- toggle between Entry and EntryForm, uses data from parent 
	- component tree:
		- app			-- stores list of all journal entries, saves and loads with localStorage
		- homepage		-- landing page component, needs journal entries from parent with 5 highest IDs
		- form			-- form to create a new journal entry, must pass data up to parent though!
		- view 			-- page that just shows a single journal entry 
	- routes: 
		- /  			-- homepage, shows latest 5 journal entries
		- /create 		-- form to create a new journal entry, needs to pass it up to parent component though 
		- /view/:id 	-- view individual journal entry
		- /edit/:id 	-- do we wanna do this or do another "edit in place" thing? 
