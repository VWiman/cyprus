import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import usersData from "../data/users.json";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = (event) => {
		event.preventDefault();

		const user = usersData.find((user) => user.username === username && user.password === password);

		if (user) {
			dispatch(login({ username: user.username }));
			navigate(`/user/${username}`);
		} else {
			alert("Invalid username or password");
		}
	};
	// Another rebase test addition
	return (
		<form onSubmit={handleLogin} className="flex gap-4 p-5 bg-white/50 rounded-sm shadow-lg backdrop-blur-md">
			<input
				id="username"
				type="text"
				placeholder="Enter username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className="rounded-sm p-2"
				required
			/>
			<input
				id="password"
				type="password"
				placeholder="Enter password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className="rounded-sm p-2"
				required
			/>
			<button
				className="bg-blue-400/80 text-white shadow-black/10 shadow-md hover:shadow-black/5 active:shadow-none text-sm font-semibold rounded-md px-3"
				type="submit">
				Login
			</button>
		</form>
	);
}

export default Login;
