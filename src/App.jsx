import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" index element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/user/:username"
					element={
						<ProtectedRoute>
							<UserProfile />
						</ProtectedRoute>
					}
				/>
			</Route>
		</Routes>
	);
}
