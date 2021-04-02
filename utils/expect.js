const { expect } = require("@jest/globals")

const expectToBe = (obj, value) => {
    expect(obj).toBe(value);
};

const expectNumber = obj => {
    expect(obj).toEqual(expect.any(Number));
};

const expectString = (obj, substr) => {
    expect(obj).toEqual(expect.stringContaining(substr));
};

module.exports = { expectToBe, expectNumber, expectString };