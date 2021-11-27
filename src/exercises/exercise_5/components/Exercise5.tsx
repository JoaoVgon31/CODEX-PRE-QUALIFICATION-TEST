import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import queryWorldClockApi from '../queryWorldClockApi';

function Exercise5(): JSX.Element {
	const [currentUTCDateTime, setCurrentUTCDateTime] = useState('');
	const [currentLocalDateTime, setCurrentLocalDateTime] = useState('');
	const [currentBRDateTime, setCurrentBRDateTime] = useState('');

	const handleGetCurrentDateTime = async (): Promise<void> => {
		const currentDateTimeUTC = await queryWorldClockApi();
		setCurrentUTCDateTime(new Date(currentDateTimeUTC).toUTCString());
		setCurrentLocalDateTime(new Date(currentDateTimeUTC).toLocaleString());
		setCurrentBRDateTime(new Date(currentDateTimeUTC).toLocaleString('pt-br'));
	};

	return (
		<div className="flex justify-center align-center w-full-screen h-full-screen">
			<div className="flex flex-col justify-center align-center w-1/4-screen">
				<div className="flex justify-center">Data e hora UTC: {currentUTCDateTime}</div>
				<div className="flex justify-center">Data e hora locais: {currentLocalDateTime}</div>
				<div className="flex justify-center">Data e hora Brasil: {currentBRDateTime}</div>
				<div className="flex w-full justify-evenly align-center margin-y-small">
					<Button variant="outlined" href="/">
						Voltar
					</Button>
					<Button variant="contained" onClick={handleGetCurrentDateTime}>
						Executar
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Exercise5;
