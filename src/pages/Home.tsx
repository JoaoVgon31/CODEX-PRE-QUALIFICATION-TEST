import React from 'react';
import ExercisesMenu from '../components/ExercisesMenu';

function Home(): JSX.Element {
	return (
		<div className="flex flex-col justify-evenly align-center w-full-screen h-full-screen">
			<div className="flex flex-col justify-center align-center lg-text">
				<div>CODEX</div>
				<div>PRE-QUALIFICATION TEST</div>
			</div>
			<div>
				<div className="flex justify-center md-text">EXERCISES RESOLUTION:</div>
				<ExercisesMenu />
			</div>
		</div>
	);
}

export default Home;
