export const CNPJFormatPosition = new Map([
	[2, '.'],
	[6, '.'],
	[10, '/'],
	[15, '-'],
]);

export enum Messages {
	VALID = 'O CNPJ informado é válido!',
	INVALID_FORMAT = 'O CNPJ informado está formatado incorretamente!',
	INVALID_DIGITS_NUMBER = 'O CNPJ informado não possui a quantidade de dígitos esperada!',
	INVALID_CHECK_DIGITS = 'O CNPJ informado possui dígitos de verificação incorretos!',
}
