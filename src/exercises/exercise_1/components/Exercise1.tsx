import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import validateCNPJ from '../validateCNPJ';

function Exercise1(): JSX.Element {
	const [CNPJ, setCNPJ] = useState('');
	const [isValid, setIsValid] = useState(true);
	const [message, setMessage] = useState('');

	const handleCheckCNPJ = (): void => {
		const validateResult = validateCNPJ(CNPJ);
		setIsValid(validateResult[0]);
		setMessage(validateResult[1]);
	};

	return (
		<div className="flex justify-center align-center w-full-screen h-full-screen">
			<div className="flex flex-col justify-center align-center w-1/4-screen">
				<TextField
					fullWidth
					error={!isValid}
					value={CNPJ}
					onChange={(e): void => {
						e.preventDefault();
						setCNPJ(e.target.value);
					}}
					id="cnpj"
					label="Insira o CNPJ para validação"
					variant="outlined"
					margin="normal"
					helperText={message}
				/>
				<div className="flex justify-evenly align-center w-full">
					<Button variant="outlined" href="/">
						Voltar
					</Button>
					<Button variant="contained" onClick={handleCheckCNPJ}>
						Executar
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Exercise1;
