import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

function App() {
	return (
		<Router>
			<Sidebar>
				<div className="container py-6 px-6">
					<Routes>
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/about" element={<About />} />
						<Route path="/comment" element={<Comment />} />
						<Route path="/analytics" element={<Analytics />} />
						<Route path="/product" element={<Product />} />
						<Route path="/productList" element={<ProductList />} />
					</Routes>
				</div>
			</Sidebar>
		</Router>
	);
}

export default App;
