module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return ones[number];
    }

    if (number < 100) {
        const ten = Math.floor(number / 10);
        const one = number % 10;
        return tens[ten] + (one !== 0 ? " " + ones[one] : "");
    }

    if (number < 1000) {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        return (
            ones[hundred] +
            " hundred" +
            (remainder !== 0 ? " " + toReadable(remainder) : "")
        );
    }

    return number.toString();
};
