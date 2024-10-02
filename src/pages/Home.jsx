import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<div className="flex flex-col bg-white/50 rounded-sm gap-4 shadow-lg backdrop-blur-md">
			<h2 className="rounded-t-sm bg-orange-400/80 p-2 text-white font-semibold text-4xl">Welcome to Cyprus Club!</h2>
			<div className="flex w-full items-center">
				<p className="text-orange-500/80 text-xs pl-3 font-bold self-start">View your username and other cool features.</p>
				<button
					className="bg-blue-400/80 text-white shadow-black/10 shadow-md hover:shadow-black/5 active:shadow-none text-sm font-semibold w-fit h-fit rounded-md ml-auto mb-5 mr-5"
					onClick={handleLoginClick}>
					<span className="flex h-full w-full active:shadow-black/20 active:shadow-inner py-1 px-3  rounded-md ">
						Login
					</span>
				</button>
			</div>
		</div>
	);
}

export default Home;
