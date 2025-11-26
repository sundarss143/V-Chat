import React from "react";
import { FaPenAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full min-h-32  shadow-gray-950 shadow-inner flex flex-col justify-between items-start px-4 py-8 bg-slate-800 text-white">
			<h1 className="font-bold text-lg flex items-center gap-4">
				<span>Venky Chat</span>
				<FaPenAlt fontSize={16} />
			</h1>
			<div className="flex items-center justify-start w-full p-4 flex-wrap">
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Contact</h1>
					<span>Venkatesh Ponnuru</span>
					<span>IIIT Nuzvidu, Andhra Pradesh</span>
					<span>Pincode - 521202</span>
					<span>
						<Link
							to={"mailto:contact.venkateshponnuru6@gmail.com"}
							target="_blank"
							className="hover:text-blue-600 hover:underline"
						>
							venkateshponnuru6@gmail.com
						</Link>
					</span>
				</div>
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Pages</h1>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/"}
						>
							Venky-Chat
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/signin"}
						>
							SignIn
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/signup"}
						>
							SignUp
						</Link>
					</span>
					<span>
						<Link
							className="hover:text-blue-600 hover:underline"
							to={"/home"}
						>
							Home
						</Link>
					</span>
				</div>
				<div className="flex flex-col min-w-[280px] w-[33%] my-3">
					<h1 className="font-semibold mb-2">Links</h1>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href="https://www.linkedin.com/in/venkatesh-ponnuru-797913279/"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn
						</a>
					</span>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href="https://github.com/438-venkatesh"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
					</span>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href="https://www.instagram.com/venky_isalwaysbest/"
							target="_blank"
							rel="noreferrer"
						>
							Instagram
						</a>
					</span>
					<span>
						<a
							className="hover:text-blue-600 hover:underline"
							href="mailto:contact.venkateshponnuru6@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							E-Mail
						</a>
					</span>
				</div>
			</div>
			<h1 className="font-bold">
				All rights reserved 2025 &copy; Venky-Chat
			</h1>
		</div>
	);
};

export default Footer;
