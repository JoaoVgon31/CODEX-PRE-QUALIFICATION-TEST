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
	const checkDigits = [0, 0];

	checkDigits[0] = 5 * CNPJ[0] + 4 * CNPJ[1] + 3 * CNPJ[2] + 2 * CNPJ[3];
	checkDigits[0] += 9 * CNPJ[4] + 8 * CNPJ[5] + 7 * CNPJ[6] + 6 * CNPJ[7];
	checkDigits[0] += 5 * CNPJ[8] + 4 * CNPJ[9] + 3 * CNPJ[10] + 2 * CNPJ[11];
	checkDigits[0] = 11 - (checkDigits[0] % 11);
	checkDigits[0] = checkDigits[0] >= 10 ? 0 : checkDigits[0];

	checkDigits[1] = 6 * CNPJ[0] + 5 * CNPJ[1] + 4 * CNPJ[2] + 3 * CNPJ[3];
	checkDigits[1] += 2 * CNPJ[4] + 9 * CNPJ[5] + 8 * CNPJ[6] + 7 * CNPJ[7];
	checkDigits[1] += 6 * CNPJ[8] + 5 * CNPJ[9] + 4 * CNPJ[10] + 3 * CNPJ[11];
	checkDigits[1] += 2 * CNPJ[12];
	checkDigits[1] = 11 - (checkDigits[1] % 11);
	checkDigits[1] = checkDigits[1] >= 10 ? 0 : checkDigits[1];

	return checkDigits[0] === CNPJ[12] && checkDigits[1] === CNPJ[13];
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
	if (!validateCheckDigits(onlyNumbersCNPJArray)) {
		return [false, Messages.INVALID_CHECK_DIGITS];
	}

	return [true, Messages.VALID];
}

export default validateCNPJ;
