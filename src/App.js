import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/users';
import { useState } from 'react';

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.value);

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [newUsername, setNewUsername] = useState('');

	return (
		<div className="App">
			<div className="add-user">
				<input
					type="text"
					placeholder="Name"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type="text"
					placeholder="Username"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
				/>
				<button
					onClick={() =>
						dispatch(
							addUser({ id: users[users.length - 1].id + 1, name, username })
						)
					}
				>
					Add User
				</button>
			</div>
			<div className="display-users">
				{users.map((user) => (
					<div key={user.id}>
						<h1>{user.name}</h1>
						<h1>{user.username}</h1>
						<input
							type="text"
							placeholder="New Username"
							onChange={(e) => setNewUsername(e.target.value)}
						/>
						<button
							onClick={() =>
								dispatch(
									updateUsername({
										id: user.id,
										username: newUsername,
									})
								)
							}
						>
							Update Username
						</button>
						<button
							onClick={() =>
								dispatch(
									deleteUser({
										id: user.id,
									})
								)
							}
						>
							Delete User
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
