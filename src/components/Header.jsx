import React from "react";
import { useState } from "react";

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		if (!isActive) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	return (
		// Header Start
		<header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent">
			<div className="container">
				<div className="relative flex items-center justify-between">
					<div className="px-4">
						<a
							href="#home"
							className="block py-6 text-lg font-bold uppercase text-primary"
						>
							rizkydipahiyat
						</a>
					</div>
					<div className="flex items-center px-4">
						<button
							onClick={handleClick}
							id="hamburger"
							name="hamburger"
							type="button"
							className={`${
								isActive && "hamburger-active"
							}  absolute right-4 block lg:hidden`}
						>
							<span className="hamburger-line duration origin-top-left transition ease-in-out"></span>
							<span className="hamburger-line duration transition ease-in-out"></span>
							<span className="hamburger-line duration origin-bottom-left transition ease-in-out"></span>
						</button>
						<nav
							id="nav-menu"
							className={`${
								!isActive && "hidden"
							} absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none `}
						>
							<ul className="block lg:flex">
								<li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
									<a
										href="#home"
										className="mx-8 flex py-2 text-base text-dark"
									>
										Beranda
									</a>
								</li>
								<li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
									<a
										href="#about"
										className="mx-8 flex py-2 text-base text-dark"
									>
										About
									</a>
								</li>
								<li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
									<a
										href="#portfolio"
										className="mx-8 flex py-2 text-base text-dark"
									>
										Portfolio
									</a>
								</li>
								<li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
									<a
										href="#clients"
										className="mx-8 flex py-2 text-base text-dark"
									>
										Clients
									</a>
								</li>
								<li className="hover:bg-blue-700 hover:text-white hover:rounded-md">
									<a
										href="#contact"
										className="mx-8 flex py-2 text-base text-dark"
									>
										Contact
									</a>
								</li>
								{/* <li className="mt-3 flex items-center pl-8 lg:mt-0">
									<div className="flex">
										<input
											type="checkbox"
											className="hidden"
											id="dark-toggle"
										/>
										<label htmlFor="dark-toggle">
											<div className="flex h-6 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
												<div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
											</div>
										</label>
										<span className="ml-2 text-sm text-slate-500">
											<svg
												className="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
											>
												<path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
												<path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path>
											</svg>
										</span>
									</div>
								</li> */}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
		// Header End
	);
};

export default Header;
