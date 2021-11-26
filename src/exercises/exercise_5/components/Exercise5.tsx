import { Button } from '@material-ui/core';
import React from 'react';
import queryWorldClockApi from '../queryWorldClockApi';

function Exercise5(): JSX.Element {
	const handleGetCurrentDateTime = async (): Promise<void> => {
		const currentDateTimeUTC = await queryWorldClockApi();
		console.log(currentDateTimeUTC);
	};

	return (
		<div className="flex justify-center align-center w-full-screen h-full-screen">
			<div className="flex justify-evenly align-center w-1/4-screen">
				<Button variant="outlined" href="/">
					Voltar
				</Button>
				<Button variant="contained" onClick={handleGetCurrentDateTime}>
					Executar
				</Button>
			</div>
		</div>
	);
}

export default Exercise5;
