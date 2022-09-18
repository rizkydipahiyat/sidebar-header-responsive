import {
	IoGrid,
	IoPerson,
	IoStatsChart,
	IoChatbubble,
	IoLockOpen,
	IoList,
} from "react-icons/io5";

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
				path: "/list",
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

export default Menus;
