const sumLargeNumbers = require("../sumLargeNumbers");

describe("sumLargeNumbers", () => {
  test("Cộng hai số nhỏ", () => {
    expect(sumLargeNumbers("123", "456")).toBe("579");
  });

  test("Cộng hai số lớn", () => {
    expect(sumLargeNumbers("987654321987654321", "123456789123456789")).toBe(
      "1111111111111111110"
    );
  });

  test("Cộng hai số có độ dài khác nhau", () => {
    expect(sumLargeNumbers("999", "1")).toBe("1000");
  });

  test("Cộng số 0 với số khác", () => {
    expect(sumLargeNumbers("0", "9999")).toBe("9999");
  });

  test("Cộng hai số 0", () => {
    expect(sumLargeNumbers("0", "0")).toBe("0");
  });
});
