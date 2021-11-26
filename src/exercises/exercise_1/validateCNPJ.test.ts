import { Messages } from './constants';
import validateCNPJ from './validateCNPJ';

const validNumbersOnlyCNPJs = ['64822456000110', '84413132000135', '26903845000180'];
const validFormattedCNPJs = ['64.822.456/0001-10', '84.413.132/0001-35', '26.903.845/0001-80'];
const invalidLessDigitsCNPJs = ['123456', '1234567891'];
const invalidMoreDigitsCNPJs = ['123456789123456', '1234567891234567891'];
const invalidFormatCNPJs = ['64.ABC.456/0001-10', '84413.132./0001--35', '26..903..845/0001-80'];
const invalidCheckDigitsCNPJs = ['64822456000134', '84413132000112', '64.822.456/0001-90', '84.413.132/0001-91'];

function validateArray(toValidate: Array<any>): Array<[boolean, Messages]> {
	const validationArray = [];
	for (let i = 0; i < toValidate.length; i++) {
		const isValid = validateCNPJ(toValidate[i]);
		validationArray.push(isValid);
	}
	console.log(validationArray);
	return validationArray;
}

it('should validate a only number CNPJ', () => {
	const validatedArray = validateArray(validNumbersOnlyCNPJs);
	const booleansArray = validatedArray.map((validation) => validation[0]);
	const messagesArray = validatedArray.map((validation) => validation[1]);
	expect(booleansArray).not.toContain(false);
	expect(messagesArray).not.toContain(!Messages.VALID);
});

it('should validate a formatted CNPJ', () => {
	const validatedArray = validateArray(validFormattedCNPJs);
	const booleansArray = validatedArray.map((validation) => validation[0]);
	const messagesArray = validatedArray.map((validation) => validation[1]);
	expect(booleansArray).not.toContain(false);
	expect(messagesArray).not.toContain(!Messages.VALID);
});

it('should invalidate the CNPJ for having more digits than expected', () => {
	const validatedArray = validateArray(invalidMoreDigitsCNPJs);
	const booleansArray = validatedArray.map((validation) => validation[0]);
	const messagesArray = validatedArray.map((validation) => validation[1]);
	expect(booleansArray).not.toContain(true);
	expect(messagesArray).not.toContain(!Messages.INVALID_DIGITS_NUMBER);
});

it('should invalidate the CNPJ for having less digits than expected', () => {
	const validatedArray = validateArray(invalidLessDigitsCNPJs);
	const booleansArray = validatedArray.map((validation) => validation[0]);
	const messagesArray = validatedArray.map((validation) => validation[1]);
	expect(booleansArray).not.toContain(true);
	expect(messagesArray).not.toContain(!Messages.INVALID_DIGITS_NUMBER);
});

it('should invalidate the CNPJ for not matching the expected format', () => {
	const validatedArray = validateArray(invalidFormatCNPJs);
	const booleansArray = validatedArray.map((validation) => validation[0]);
	const messagesArray = validatedArray.map((validation) => validation[1]);
	expect(booleansArray).not.toContain(true);
	expect(messagesArray).not.toContain(!Messages.INVALID_FORMAT);
});

it('should invalidate the CNPJ for not having valid "check-digits"', () => {
	const validatedArray = validateArray(invalidCheckDigitsCNPJs);
	const booleansArray = validatedArray.map((validation) => validation[0]);
	const messagesArray = validatedArray.map((validation) => validation[1]);
	expect(booleansArray).not.toContain(true);
	expect(messagesArray).not.toContain(!Messages.INVALID_CHECK_DIGITS);
});
