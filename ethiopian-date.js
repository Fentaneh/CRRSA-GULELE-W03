// ===============================
// Gregorian → Ethiopian
// ===============================
function gregorianToEthiopian(gYear, gMonth, gDay) {

    let date = new Date(gYear, gMonth - 1, gDay);

    let newYear = new Date(gYear, 8, 11);

    let ecYear;

    if (date < newYear) {
        ecYear = gYear - 8;
    } else {
        ecYear = gYear - 7;
    }

    if (date < newYear) {
        newYear = new Date(gYear - 1, 8, 11);
    }

    let diff =
    Math.floor((date - newYear) / 86400000);

    let ecMonth =
    Math.floor(diff / 30) + 1;

    let ecDay =
    (diff % 30) + 1;

    return {
        year: ecYear,
        month: ecMonth,
        day: ecDay
    };

}
