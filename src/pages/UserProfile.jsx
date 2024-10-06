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
		<div className="flex flex-col bg-white/50 rounded-sm gap-4 shadow-lg backdrop-blur-md p-4">
			<h2 className="text-orange-400/80 font-semibold text-4xl">Welcome, {username}!</h2>
			<button
				className="bg-blue-400/80 text-white shadow-black/10 shadow-md hover:shadow-black/5 active:shadow-none text-sm font-semibold rounded-md py-3"
				onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}
