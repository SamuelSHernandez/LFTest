// Mocked variables
var mockBaseBasicWageFactor = 100;
var mockBaseOtherSalaryPerMonth = 200;
var mockBaseSalaryRate = 1.2;
var mockBCDPct = 0.8;
var mockBudgetNumber = 4;
var mockBaseCountry = "123,926";
var mockTimeWorkPercent = 0.9;

// Mocked function
function mockSetFieldValue(fieldName, value) {
    console.log(`${fieldName} set to ${value}`);
}

// Mocked calculation logic
var mockBCDSalaryUSCurrencyCalc = (mockBaseBasicWageFactor + mockBaseOtherSalaryPerMonth) * mockBaseSalaryRate * mockBCDPct;

var mockValue;
if (mockBudgetNumber !== 5 && mockBaseCountry.indexOf("926") >= 0 && mockBCDSalaryUSCurrencyCalc <= 500) {
    mockValue = 500 * mockTimeWorkPercent;
} else if (mockBudgetNumber !== 5 && mockBaseCountry.indexOf("926") >= 0 && mockBCDSalaryUSCurrencyCalc > 500) {
    mockValue = mockBCDSalaryUSCurrencyCalc * mockTimeWorkPercent;
} else if (mockBudgetNumber !== 5 && mockBaseCountry.indexOf("926") < 0 && mockBCDSalaryUSCurrencyCalc > 500) {
    mockValue = mockBCDSalaryUSCurrencyCalc * mockTimeWorkPercent;
} else if (mockBudgetNumber !== 5 && mockBaseCountry.indexOf("926") < 0 && mockBCDSalaryUSCurrencyCalc <= 500) {
    mockValue = 500 * mockTimeWorkPercent;
} else {
    mockValue = 0;
}

// Mocked function call
mockSetFieldValue("MockBCDSalaryPerMonthUSCurrencyCalc", mockValue);
