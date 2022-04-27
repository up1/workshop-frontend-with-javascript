import { useEffect, useState } from "react";
import axios from "axios"

const DemoStateApi = (props) => {
	const [users, setUsers] = useState([]);

	useEffect( () => {
		console.log("Call effect");
		axios.get('https://jsonplaceholder.typicode.com/users/')
		.then(response => {
			setUsers(response.data)
		});
	}, []);

	console.log(users);
	
	return( 
		<div>
			All users
			{console.log("..DONE...")}
			<ul>
				{users.map(user => <li key={user.id}>{user.name}</li>)}
			</ul>
		</div>
	);
}

export default DemoStateApi;