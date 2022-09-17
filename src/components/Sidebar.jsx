import React, { useState } from "react";
import {
	IoGrid,
	IoPerson,
	IoStatsChart,
	IoChatbubble,
	IoLockOpen,
	IoList,
	IoChevronBackCircle,
	IoChevronDownOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

	const Menus = [
		{
			id: 1,
			path: "/dashboard",
			name: "Dashboard",
			icon: <IoGrid />,
		},
		{
			id: 2,
			path: "/about",
			name: "About",
			icon: <IoPerson />,
			spacing: true,
		},
		{
			id: 3,
			path: "/analytics",
			name: "Analytics",
			icon: <IoStatsChart />,
		},
		{
			id: 4,
			name: "Comment",
			spacing: true,
			icon: <IoChatbubble />,

			subMenu: true,
			subMenuItems: [
				{
					id: 1,
					path: "/comment",
					name: "Add",
				},
				{
					id: 2,
					path: "/comment",
					name: "List",
				},
			],
		},
		{
			id: 5,
			path: "/product",
			name: "Product",
			spacing: true,
			icon: <IoLockOpen />,
		},
		{
			id: 6,
			path: "/productList",
			name: "Product List",
			icon: <IoList />,
		},
	];
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
					{Menus.map((menu) => (
						<>
							<li
								key={menu.id}
								className={`text-white text-sm flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-300 rounded-md  ${
									menu.spacing ? "mt-9" : "mt-5"
								}`}
							>
								<NavLink
									className="-mt-1 origin-left duration-300"
									to={menu.path}
								>
									<span className="block float-left text-2xl">{menu.icon}</span>
									<span
										className={`text-base ml-5 font-medium flex-1 transition duration-500 ease-in-out ${
											!isOpen && "hidden"
										}`}
									>
										{menu.name}
									</span>
								</NavLink>
								{menu.subMenu && isOpen && (
									<IoChevronDownOutline
										className={`${
											isSubMenuOpen && "rotate-180"
										} text-2xl ml-10`}
										onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
									/>
								)}
							</li>
							{menu.subMenu && isSubMenuOpen && isOpen && (
								<ul>
									{menu.subMenuItems.map((subMenuItem) => (
										<li
											key={subMenuItem.id}
											className="text-white text-sm flex items-center gap-4 cursor-pointer p-2 ml-12 hover:bg-slate-300 rounded-md"
										>
											<NavLink to={`${subMenuItem.path}`}>
												<span
													className={`text-base ml-3 font-medium flex-1 transition duration-500 ease-in-out ${
														!isOpen && "hidden"
													}`}
												>
													{subMenuItem.name}
												</span>
											</NavLink>
										</li>
									))}
								</ul>
							)}
						</>
					))}
				</ul>
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Sidebar;
