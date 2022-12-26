import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { selectRepositoryState } from '../store/repositorySlice';

const Home = () => {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const repositories = useSelector(selectRepositoryState);
	console.log('repositories : ', repositories);

	return (
		<>
			<Navbar />
			<main className="px-8 mt-4">
				<div className="flex justify-center">
					<form>
						<div className="border rounded-lg overflow-hidden">
							<input
								type={'text'}
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className="focus:outline-none px-3 text-gray-700"
							/>
							<button
								type="submit"
								className="bg-blue-500 text-white  px-5 py-1 transition hover:bg-blue-600"
							>
								Search
							</button>
						</div>
					</form>
				</div>
				<hr className="my-4" />
			</main>
		</>
	);
};

export default Home;
