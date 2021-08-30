require("../dist/js-helpers.js");


/**
 * Test for math.js
 */
describe('Check Math module', () => {
    test('percentageDifference', () => {
        expect((100).percentageDifference(20)).toBe(400);
    });

    test('minusPercentage', () => {
        expect((500).minusPercentage(25)).toBe(375);
    });

    test('randomInteger', () => {
        expect(Math.randomInteger(1, 10)).toBeDefined();
        expect(Math.randomInteger(10, 90)).toBeGreaterThan(10);
        expect(Math.randomInteger(10, 90)).toBeLessThan(90);
    });

    test('isInteger', () => {
        expect((14.7).isInteger()).toBeFalsy();
    });

    test('nearestDistance', () => {
        let locations = [
            {name: "Moscow", coords: [55.79749504565197, 37.5407153847656]},
            {name: "Voronezh", coords: [51.66109513550912, 39.19964245473753]},
            {name: "Yaroslavl", coords: [57.62662119485742, 39.89367465100093]},
            {name: "Rybinsk", coords: [58.04855727216249, 38.85813673976128]},
            {name: "Ivanovo", coords: [57.00040249293972, 40.973840485275254]},
            {name: "Kursk", coords: [51.73096145146215, 36.192820361190755]},
            {name: "Bryansk", coords: [53.243644660620774, 34.36328412094874]},
        ];

        let myCoords = [52.7614485, 35.6722916];

        const nearest = Math.nearestDistance(locations, myCoords);

        expect(nearest).toBeDefined();
        expect(nearest).toBe(locations[6]);
    });
});


/**
 * Test for visual.js
 */
describe('Check Visual module', () => {
    test('toCurrency', () => {
        expect((14990.79).toCurrency()).toBe('14 990.79$');
        expect((14990.79).toCurrency("₽", undefined, 2, true, ",")).toBe('14 990,79₽');
    });

    test('makeDigit', () => {
        expect((3568934).makeDigit()).toBe('3 568 934');
    });

    test('simplifyNumber', () => {
        expect((7356892344).simplifyNumber(1)).toBe('7.4B');
        expect((3568934).simplifyNumber(2)).toBe('3.57M');
        expect((58934).simplifyNumber(2)).toBe('58.93K');
        expect((5894).simplifyNumber(1)).toBe('5.9K');
        expect((168).simplifyNumber()).toBe('168');
    });
});


/**
 * Test for obj.js
 */
describe('Check Obj module', () => {
    test('sum', () => {
        let cart = [
            {title: 'iPhone 6s', price: 23500.00},
            {title: 'AirPods', price: 11390.00},
            {title: 'Чехол для iPhone 6s (синий)', price: 490.80},
        ];

        expect(cart.sum('price')).toBe(35380.8);
        expect(cart.sum('price').toCurrency("₽")).toBe('35 380.80₽');
    });

    test('average', () => {
        let product = {
            title: 'iPhone XR',
            // ...
            reviews: [
                {text: '...', stars: 4.9},
                {text: '...', stars: 3.2},
                {text: '...', stars: 1},
                {text: '...', stars: 5},
                {text: '...', stars: 4.5},
            ]
        };

        expect(product.reviews.average('stars')).toBe("3.72");
    });

    test('isNotEmpty', () => {
        let user = {};
        expect(user.isNotEmpty()).toBeFalsy();
    });
});


/**
 * Test for arr.js
 */
describe('Check Arr module', () => {
    test('deleteItem', () => {
        let numbers = [854, 1, 8, 4, 7, 4354];
        expect(numbers.deleteItem(4)).not.toContain(4);
    });

    test('deleteItems', () => {
        let numbers = [854, 1, 8, 4, 7, 4354];
        expect(numbers.deleteItems([4])).not.toContain(4);
    });
});


/**
 * Test for regexp.js
 */
describe('Check RegExp module', () => {
    test('isEmail', () => {
        expect(('013131@mail.ru').isEmail()).toBeTruthy();
    });

    test('isOnlyNumbers', () => {
        expect(('12572').isOnlyNumbers()).toBeTruthy();
    });

    test('isOnlyLetters', () => {
        expect(('letter').isOnlyLetters()).toBeTruthy();
    });

    test('isOnlyLatin', () => {
        expect(('latin').isOnlyLatin()).toBeTruthy();
    });

    test('isOnlyCyrillic', () => {
        expect(('кириллица').isOnlyCyrillic()).toBeTruthy();
    });

    test('isDomain', () => {
        expect(('rah-emil.ru').isDomain()).toBeTruthy();
    });

    test('isIP', () => {
        expect(('255.255.255.255:8000').isIP()).toBeTruthy();
    });

    test('hasSymbols', () => {
        expect(('013131@mail.ru').hasSymbols()).toBeTruthy();
    });
});