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

	const active = "bg-slate-300 rounded-md w-[240px] py-1 px-2 ";
	return (
		<>
			<div className="flex">
				<div
					className={`${
						isOpen ? "w-70" : "w-20"
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
						{Menus.map((menu, index) => (
							<React.Fragment key={index}>
								<li
									className={`text-white relative text-sm flex items-center gap-x-4 cursor-pointer p-1 hover:bg-slate-300 rounded-md visited:bg-slate-300  ${
										menu.spacing ? "mt-9" : "mt-7"
									}`}
								>
									<NavLink
										className="-mt-1 origin-left duration-300"
										to={menu.path}
									>
										{({ isActive }) => (
											<>
												<div
													className={`${isActive ? active : undefined} ${
														!isOpen && "bg-inherit"
													} ${menu.id === 4 ? "bg-inherit" : ""}`}
												>
													<span className="block float-left text-2xl">
														{menu.icon}
													</span>
													<span
														className={`  text-base ml-5 font-medium flex-1 transition duration-500 ease-in-out ${
															!isOpen && "hidden"
														}`}
													>
														{menu.name}
													</span>
												</div>
											</>
										)}
									</NavLink>
									{menu.subMenu && isOpen && (
										<IoChevronDownOutline
											className={`${
												isSubMenuOpen && "rotate-180"
											} text-2xl ml-[200px] absolute`}
											onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
										/>
									)}
								</li>
								{menu.subMenu && isSubMenuOpen && isOpen && (
									<ul>
										{menu.subMenuItems.map((subMenuItem, index) => (
											<li
												key={index}
												className="text-white text-sm flex items-center gap-4 cursor-pointer p-2 ml-12 hover:bg-slate-300 rounded-md"
											>
												<NavLink to={`${subMenuItem.path}`}>
													{({ isActive }) => (
														<span
															className={`${
																isActive ? active : undefined
															} text-base ml-3 font-medium flex-1 transition duration-500 ease-in-out ${
																!isOpen && "hidden"
															}`}
														>
															{subMenuItem.name}
														</span>
													)}
												</NavLink>
											</li>
										))}
									</ul>
								)}
							</React.Fragment>
						))}
					</ul>
				</div>
				<main>{children}</main>
			</div>
		</>
	);
};

export default Sidebar;
