import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { selectRepositoryState } from '../store/repositorySlice';

const Home = () => {
	const repositories = useSelector(selectRepositoryState);
	console.log('repositories : ', repositories);
	return (
		<>
			<Navbar />
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</>
	);
};

export default Home;
