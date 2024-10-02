import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserProfile() {
	const username = useSelector((state) => state.auth.username);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch(logout());
		navigate("/");
	};

	return (
		<div>
			<h1>Welcome, {username}!</h1>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
}
