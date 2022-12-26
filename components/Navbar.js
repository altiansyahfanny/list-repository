import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<nav className="bg-blue-500 flex justify-between items-center px-8 py-3 text-white">
			<Link href={'/'}>
				<h1 className="text-2xl font-semibold">List Repository</h1>
			</Link>
			<ul className="flex items-center gap-x-4">
				<Link href={'/'}>Home</Link>
				<Link href={'about'}>About</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
