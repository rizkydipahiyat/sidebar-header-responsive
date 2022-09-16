import React, { useState } from "react";
import {
	IoGrid,
	IoPerson,
	IoStatsChart,
	IoChatbubble,
	IoLockOpen,
	IoList,
	IoChevronBackCircle,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);

	const Menus = [
		{
			path: "/dashboard",
			name: "Dashboard",
			icon: <IoGrid />,
		},
		{
			path: "/about",
			name: "About",
			icon: <IoPerson />,
		},
		{
			path: "/analytics",
			name: "Analytics",
			icon: <IoStatsChart />,
		},
		{
			path: "/comment",
			name: "Comment",
			icon: <IoChatbubble />,
		},
		{
			path: "/product",
			name: "Product",
			icon: <IoLockOpen />,
		},
		{
			path: "/productList",
			name: "Product List",
			icon: <IoList />,
		},
	];
	const activeClassName =
		" rounded-md p-2 cursor-pointer bg-blue-800 hover:bg-blue-800 text-white text-sm items-center";
	return (
		<div className="flex">
			<div
				className={`${
					isOpen ? "w-72" : "w-20"
				} text-white bg-blue-500 h-screen p-5 pt-8 relative transition duration-500 ease-in-out`}
			>
				<IoChevronBackCircle
					className={`absolute cursor-pointer text-white -right-4 -mt-2 top-9 w-10 h-10 border-white
           border-2 rounded-full   ${!isOpen && "rotate-180"}`}
					onClick={() => setIsOpen(!isOpen)}
				/>
				<div className="flex gap-4 items-center">
					<IoGrid
						className={`cursor-pointer duration-500 ${
							isOpen && "rotate-[360deg]"
						}`}
					/>
					<h1
						className={`text-white ml-5 origin-left font-medium text-xl duration-500 ${
							!isOpen && "scale-0 hidden"
						}`}
					>
						Yo Dash
					</h1>
				</div>
				<ul className="mt-6">
					{Menus.map((menu, i) => (
						<li
							key={i}
							className={`flex rounded-md p-2 cursor-pointer hover:bg-blue-800 text-white text-sm items-center `}
						>
							<span className="w-10 h-10 mt-5">{menu.icon}</span>
							<NavLink
								className={`${
									!isOpen && "hidden"
								} -mt-1 origin-left duration-300`}
								to={menu.path}
							>
								{({ isActive }) => (
									<span className={isActive ? activeClassName : undefined}>
										{menu.name}
									</span>
								)}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Sidebar;
