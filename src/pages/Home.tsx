import React from 'react';
import ExercisesMenu from '../components/ExercisesMenu';

function Home(): JSX.Element {
	return (
		<div className="flex flex-col justify-evenly align-center w-full-screen h-full-screen">
			<ExercisesMenu />
		</div>
	);
}

export default Home;
