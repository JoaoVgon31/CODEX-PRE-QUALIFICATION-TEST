import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

function ExercisesMenu(): JSX.Element {
	const menuItems = [
		'Exercise 1',
		'Exercise 2',
		'Exercise 3',
		'Exercise 4',
		'Exercise 5',
		'Exercise 6',
		'Exercise 7',
		'Exercise 8',
	];

	return (
		<div className="flex flex-col justify-center align-center w-1/4-screen">
			<ButtonGroup
				fullWidth
				orientation="vertical"
				aria-label="menu de acesso às páginas dos exercícios"
				variant="contained"
				size="large"
			>
				{menuItems.map((item) => (
					<Button key={menuItems.indexOf(item)} href={`/exercise${(menuItems.indexOf(item) + 1).toString()}`}>
						{item}
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}

export default ExercisesMenu;
