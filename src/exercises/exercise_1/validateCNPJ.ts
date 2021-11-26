const CNPJFormatPosition = new Map([
	[2, '.'],
	[6, '.'],
	[10, '/'],
	[15, '-'],
]);

function getOnlyNumbersCNPJ(formattedCNPJ: Array<string>): Array<number> {
	return formattedCNPJ.filter((element) => !Number.isNaN(parseInt(element))).map((element) => parseInt(element));
}

function validateFormat(CNPJ: string): boolean {
	for (let i = 0; i < CNPJ.length; i++) {
		if (CNPJFormatPosition.has(i)) {
			if (CNPJ[i] !== CNPJFormatPosition.get(i)) {
				return false;
			}
		} else if (Number.isNaN(parseInt(CNPJ[i]))) {
			return false;
		}
	}
	return true;
}

function validateDigitsNumber(CNPJ: Array<number>): boolean {
	if (CNPJ.length !== 14) {
		return false;
	}
	return true;
}

function validateCheckDigits(CNPJ: Array<number>): boolean {
	return true;
}

function validateCNPJ(CNPJ: string): boolean {
	const CNPJArray = CNPJ.split('');
	const onlyNumbersCNPJArray = getOnlyNumbersCNPJ(CNPJArray);

	if (!validateFormat(CNPJ) && CNPJArray.length !== onlyNumbersCNPJArray.length) {
		return false;
	}
	if (!validateDigitsNumber(onlyNumbersCNPJArray)) {
		return false;
	}
	if (!validateDigitsNumber(onlyNumbersCNPJArray)) {
		return false;
	}

	return true;
}

export default validateCNPJ;
