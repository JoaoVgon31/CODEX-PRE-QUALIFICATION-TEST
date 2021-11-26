import { Button } from '@material-ui/core';
import React from 'react';

function Exercise6(): JSX.Element {
	return (
		<div className="flex justify-center align-center w-full-screen h-full-screen">
			<div className="flex flex-col justify-center align-center">
				<div className="margin-y-small">
					Link para requisição:{' '}
					<a
						href="https://us-central1-codex-pre-qualification-test.cloudfunctions.net/getCurrentDateTime"
						target="_blank"
						rel="noreferrer"
					>
						https://us-central1-codex-pre-qualification-test.cloudfunctions.net/getCurrentDateTime
					</a>
				</div>
				<div className="flex w-full justify-evenly align-center">
					<Button variant="outlined" href="/">
						Voltar
					</Button>
					<Button
						variant="contained"
						href="https://us-central1-codex-pre-qualification-test.cloudfunctions.net/getCurrentDateTime"
						target="_blank"
					>
						Executar
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Exercise6;
