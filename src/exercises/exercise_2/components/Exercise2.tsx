import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import checkRectanglesIntersection from '../checkRectanglesIntersection';
import iPoint from '../iPoint';

function Exercise2(): JSX.Element {
	const [message, setMessage] = useState('');
	const [r1Point1, setR1Point1] = useState({ x: 0, y: 0 });
	const [r1Point2, setR1Point2] = useState({ x: 1, y: 1 });
	const [r2Point1, setR2Point1] = useState({ x: 0, y: 0 });
	const [r2Point2, setR2Point2] = useState({ x: 1, y: 1 });

	const handleCheckIntersection = (): void => {
		console.log(r1Point1);
		console.log(r1Point2);
		console.log(r2Point1);
		console.log(r2Point2);
		if (checkRectanglesIntersection({ point1: r1Point1, point2: r1Point2 }, { point1: r2Point1, point2: r2Point2 })) {
			setMessage('Os retângulos possuem interseção');
		} else {
			setMessage('Os retângulos não possuem interseção');
		}
	};

	return (
		<div className="flex justify-center align-center w-full-screen h-full-screen">
			<div className="flex flex-col justify-center align-center">
				<div className="flex w-1/3-screen justify-evenly align-stretch">
					<div className="flex flex-col w-1/2 justify-evenly align-center">
						<div />
						<div className="margin-y-small">Retângulo 1</div>
						<div className="margin-y-small">Retângulo 2</div>
					</div>
					<div className="flex flex-col w-1/4 justify-evenly align-center">
						<div>Ponto 1</div>
						<div className="flex justify-center align-center margin-y-small">
							<div className="flex flex-col justify-evenly align-center">
								X
								<TextField
									value={r1Point1.x}
									onChange={(e): void => {
										e.preventDefault();
										setR1Point1({ x: parseInt(e.target.value), y: r1Point1.y });
									}}
									size="small"
								/>
							</div>
							<div className="flex flex-col justify-evenly align-center">
								Y
								<TextField
									value={r1Point1.y}
									onChange={(e): void => {
										e.preventDefault();
										setR1Point1({ x: r1Point1.x, y: parseInt(e.target.value) });
									}}
									size="small"
								/>
							</div>
						</div>
						<div className="flex justify-center align-center margin-y-small">
							<div className="flex flex-col justify-evenly align-center">
								X
								<TextField
									value={r2Point1.x}
									onChange={(e): void => {
										e.preventDefault();
										setR2Point1({ x: parseInt(e.target.value), y: r2Point1.y });
									}}
									size="small"
								/>
							</div>
							<div className="flex flex-col justify-evenly align-center">
								Y
								<TextField
									value={r2Point1.y}
									onChange={(e): void => {
										e.preventDefault();
										setR2Point1({ x: r2Point1.x, y: parseInt(e.target.value) });
									}}
									size="small"
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-1/4 justify-evenly align-center">
						<div>Ponto 2</div>
						<div className="flex justify-center align-center margin-y-small">
							<div className="flex flex-col justify-evenly align-center">
								X
								<TextField
									value={r1Point2.x}
									onChange={(e): void => {
										e.preventDefault();
										setR1Point2({ x: parseInt(e.target.value), y: r1Point2.y });
									}}
									size="small"
								/>
							</div>
							<div className="flex flex-col justify-evenly align-center">
								Y
								<TextField
									value={r1Point2.y}
									onChange={(e): void => {
										e.preventDefault();
										setR1Point2({ x: r1Point2.x, y: parseInt(e.target.value) });
									}}
									size="small"
								/>
							</div>
						</div>
						<div className="flex justify-center align-center margin-y-small">
							<div className="flex flex-col justify-evenly align-center">
								X
								<TextField
									value={r2Point2.x}
									onChange={(e): void => {
										e.preventDefault();
										setR2Point2({ x: parseInt(e.target.value), y: r2Point2.y });
									}}
									size="small"
								/>
							</div>
							<div className="flex flex-col justify-evenly align-center">
								Y
								<TextField
									value={r2Point2.y}
									onChange={(e): void => {
										e.preventDefault();
										setR2Point2({ x: r2Point2.x, y: parseInt(e.target.value) });
									}}
									size="small"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-evenly align-center margin-y-small">
					<Button variant="outlined" href="/">
						Voltar
					</Button>
					<Button variant="contained" onClick={handleCheckIntersection}>
						Executar
					</Button>
				</div>
				<div className="flex justify-center align-center margin-y-small">{message}</div>
			</div>
		</div>
	);
}

export default Exercise2;
