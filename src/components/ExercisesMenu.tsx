import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

function ExercisesMenu(): JSX.Element {
	const menuItems = [
		'Exercício 1',
		'Exercício 2',
		'Exercício 3',
		'Exercício 4',
		'Exercício 5',
		'Exercício 6',
		'Exercício 7',
		'Exercício 8',
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
