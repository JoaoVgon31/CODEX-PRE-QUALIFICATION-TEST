import validateCNPJ from './validateCNPJ';

const validNumbersOnlyCNPJs = ['64822456000110', '84413132000135', '26903845000180'];
const validFormattedCNPJs = ['64.822.456/0001-10', '84.413.132/0001-35', '26.903.845/0001-80'];
const invalidLessDigitsCNPJs = ['123456', '1234567891'];
const invalidMoreDigitsCNPJs = ['123456789123456', '1234567891234567891'];
const invalidFormatCNPJs = ['64.ABC.456/0001-10', '84413.132./0001--35', '26..903..845/0001-80'];
const invalidCheckDigitsCNPJs = ['64822456000134', '84413132000112', '64.822.456/0001-90', '84.413.132/0001-91'];

function validateArray(toValidate: Array<any>): Array<boolean> {
	const validationArray = [];
	for (let i = 0; i < toValidate.length; i++) {
		const isValid = validateCNPJ(toValidate[i]);
		validationArray.push(isValid);
	}
	return validationArray;
}

it('should validate a only number CNPJ', () => {
	expect(validateArray(validNumbersOnlyCNPJs)).not.toContain(false);
});

it('should validate a formatted CNPJ', () => {
	expect(validateArray(validFormattedCNPJs)).not.toContain(false);
});

it('should invalidate the CNPJ for having more digits than expected', () => {
	expect(validateArray(invalidMoreDigitsCNPJs)).not.toContain(true);
});

it('should invalidate the CNPJ for having less digits than expected', () => {
	expect(validateArray(invalidLessDigitsCNPJs)).not.toContain(true);
});

it('should invalidate the CNPJ for not matching the expected format', () => {
	expect(validateArray(invalidFormatCNPJs)).not.toContain(true);
});

it('should invalidate the CNPJ for not having valid "check-digits"', () => {
	expect(validateArray(invalidCheckDigitsCNPJs)).not.toContain(true);
});
