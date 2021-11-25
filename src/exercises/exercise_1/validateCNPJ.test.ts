import validateCNPJ from './validateCNPJ';

const validNumbersOnlyCNPJs = ['64822456000110', '84413132000135', '26903845000180'];
const validFormattedCPNJs = ['64.822.456/0001-10', '84.413.132/0001-35', '26.903.845/0001-80'];
const invalidLessDigitsCNPJs = ['123456', '1234567891'];
const invalidMoreDigitsCNPJs = ['123456789'];
const invalidFormatCNPJs = [];
const invalidCheckDigitsCNPJs = [];

it('should validate a only number CNPJ', () => {});

it('should validate a formatted CNPJ', () => {});

it('should invalidate the CNPJ for having more digits than expected', () => {});

it('should invalidate the CNPJ for having less digits than expected', () => {});

it('should invalidate the CNPJ for not matching the expected format', () => {});

it('should invalidate the CNPJ for not having valid "check-digits"', () => {});
