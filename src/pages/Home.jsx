import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<div>
			<h1>Welcome to Our App!</h1>
			<button onClick={handleLoginClick}>
				Login
			</button>
		</div>
	);
}

export default Home;
