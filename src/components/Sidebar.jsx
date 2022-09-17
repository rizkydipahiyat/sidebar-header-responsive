import React, { useState } from "react";
import {
	IoGrid,
	IoChevronBackCircle,
	IoChevronDownOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children, Menus }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

	const active = "text-indigo-900";
	return (
		<>
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
									className={`text-white text-sm flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-300 rounded-md visited:bg-slate-300  ${
										menu.spacing ? "mt-9" : "mt-5"
									}`}
								>
									<NavLink
										className="-mt-1 origin-left duration-300"
										to={menu.path}
									>
										{({ isActive }) => (
											<>
												<span className="block float-left text-2xl">
													{menu.icon}
												</span>
												<span
													className={`${isActive ? active : undefined} ${
														menu.id === 4 ? "text-slate-100" : ""
													} text-base ml-5 font-medium flex-1 transition duration-500 ease-in-out ${
														!isOpen && "hidden"
													}`}
												>
													{menu.name}
												</span>
											</>
										)}
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
												key={subMenuItem.name}
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
		</>
	);
};

export default Sidebar;
