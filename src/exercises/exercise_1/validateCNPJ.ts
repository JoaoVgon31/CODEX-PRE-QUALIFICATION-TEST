import { CNPJFormatPosition, Messages } from './constants';

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

function validateCNPJ(CNPJ: string): [boolean, Messages] {
	const CNPJArray = CNPJ.split('');
	const onlyNumbersCNPJArray = getOnlyNumbersCNPJ(CNPJArray);

	if (!validateFormat(CNPJ) && CNPJArray.length !== onlyNumbersCNPJArray.length) {
		return [false, Messages.INVALID_FORMAT];
	}
	if (!validateDigitsNumber(onlyNumbersCNPJArray)) {
		return [false, Messages.INVALID_DIGITS_NUMBER];
	}
	if (!validateDigitsNumber(onlyNumbersCNPJArray)) {
		return [false, Messages.INVALID_CHECK_DIGITS];
	}

	return [true, Messages.VALID];
}

export default validateCNPJ;
